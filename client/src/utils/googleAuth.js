const PRODUCTION_REDIRECT_URI = "https://docverify-two.vercel.app/auth/google/callback";
const GOOGLE_AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";

// Helper to sanitize a configured redirect URI. If it points to localhost/127.0.0.1, ignore it.
const sanitizeRedirectUri = (uri) => {
  if (!uri) return null;
  const lower = uri.toLowerCase();
  if (lower.includes("localhost") || lower.includes("127.0.0.1")) {
    // Don't allow localhost in production flows — override with production callback
    console.warn("Ignored VITE_GOOGLE_REDIRECT_URI because it points to localhost/127.0.0.1. Falling back to production redirect URI.");
    return null;
  }
  return uri;
};

// Build Google OAuth URL using environment configuration. When VITE_GOOGLE_REDIRECT_URI is
// not provided or points to localhost, default to the production redirect URI.
export const getGoogleAuthUrl = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const configured = sanitizeRedirectUri(import.meta.env.VITE_GOOGLE_REDIRECT_URI);
  const redirectUri = configured || PRODUCTION_REDIRECT_URI;

  if (!clientId) {
    throw new Error("VITE_GOOGLE_CLIENT_ID is not configured.");
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: ["openid", "email", "profile"].join(" "),
    access_type: "offline",
    include_granted_scopes: "true",
    prompt: "consent",
  });

  return `${GOOGLE_AUTH_ENDPOINT}?${params.toString()}`;
};

// Returns the redirect URI used for completing OAuth flows. Defaults to production if not configured or invalid.
export const getGoogleRedirectUri = () => {
  return sanitizeRedirectUri(import.meta.env.VITE_GOOGLE_REDIRECT_URI) || PRODUCTION_REDIRECT_URI;
};

