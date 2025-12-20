const PRODUCTION_REDIRECT_URI = "https://docverify-two.vercel.app/auth/google/callback";
const GOOGLE_AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";

// Build Google OAuth URL using environment configuration. When VITE_GOOGLE_REDIRECT_URI is
// not provided, default to the production redirect URI (do NOT fall back to a development origin).
export const getGoogleAuthUrl = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI || PRODUCTION_REDIRECT_URI;

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

// Returns the redirect URI used for completing OAuth flows. Defaults to production if not configured.
export const getGoogleRedirectUri = () => {
  return import.meta.env.VITE_GOOGLE_REDIRECT_URI || PRODUCTION_REDIRECT_URI;
};

