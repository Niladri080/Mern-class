import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import GoogleCallback from "./GoogleCallback";
import PrivateAuth from "./Middlewares/CitizenAuthMiddleware";
import PrivateAdminAuth from "./Middlewares/AdminAuthMiddleware";
import { UserProvider } from "./Context/UserContext";
import { Toaster } from "sonner";
import Navbar from "./Admin/components/Navbar";
import Sidebar from "./Admin/components/Sidebar";

// Lazy load landing page (critical - load immediately but with code splitting)
const Page = lazy(() => import("./Prelogin/pages/Landing"));

// Lazy load auth pages (non-critical - load on demand)
const LoginPage = lazy(() => import("./Prelogin/pages/Login"));
const SignUpPage = lazy(() => import("./Prelogin/pages/Signup"));
const AdminSignUpPage = lazy(() => import("./Admin/pages/AdminSignup"));
const AdminLoginPage = lazy(() => import("./Admin/pages/AdminLogin"));

// Lazy load info pages (non-critical)
const AboutPage = lazy(() => import("./Prelogin/pages/About"));
const ContactPage = lazy(() => import("./Prelogin/pages/Contact"));
const PrivacyPage = lazy(() => import("./Prelogin/pages/Privacy"));
const TermsPage = lazy(() => import("./Prelogin/pages/Terms"));
const DocumentationPage = lazy(() => import("./Prelogin/pages/Documentation"));
const HelpCenterPage = lazy(() => import("./Prelogin/pages/HelpCenter"));
const PlatformInfoPage = lazy(() => import("./Prelogin/pages/PlatformInfo"));

// Lazy load citizen pages (load on demand)
const Dashboard = lazy(() => import("./citizen/pages/Dashboard"));
const ProfilePage = lazy(() => import("./citizen/pages/Profile"));
const DocumentDetailsPage = lazy(() => import("./citizen/pages/DocumentDetails"));
const SettingsPage = lazy(() => import("./citizen/pages/Settings"));

// Lazy load admin pages (load on demand)
const AdminDashboard = lazy(() => import("./Admin/pages/Dashboard"));
const VerificationQueue = lazy(() => import("./Admin/pages/VerificationQueue"));
const DocumentReview = lazy(() => import("./Admin/pages/DocumentReview"));
const LogsAudit = lazy(() => import("./Admin/pages/LogsAudit"));
const UserManagement = lazy(() => import("./Admin/pages/UserManagement"));
const Settings = lazy(() => import("./Admin/pages/Settings"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" richColors />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin/signup" element={<AdminSignUpPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/help-center" element={<HelpCenterPage />} />
            <Route
              path="/how-it-works"
              element={<PlatformInfoPage title="How It Works" />}
            />
            <Route
              path="/features"
              element={<PlatformInfoPage title="Features" />}
            />
            <Route
              path="/security"
              element={<PlatformInfoPage title="Security" />}
            />
            <Route
              path="/compliance"
              element={<PlatformInfoPage title="Compliance" />}
            />
            <Route path="/auth/google/callback" element={<GoogleCallback />} />
            <Route
              path="/citizen/*"
              element={
                <PrivateAuth>
                  <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                      <Route path="" element={<Dashboard />} />
                      <Route path="profile" element={<ProfilePage />} />
                      <Route
                        path="document/:id"
                        element={<DocumentDetailsPage />}
                      />
                      <Route path="settings" element={<SettingsPage />} />
                    </Routes>
                  </Suspense>
                </PrivateAuth>
              }
            />
            <Route
              path="/admin/*"
              element={
                <PrivateAdminAuth>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <Navbar />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Suspense fallback={<LoadingFallback />}>
                          <Routes>
                            <Route path="" element={<AdminDashboard />} />
                            <Route path="dashboard" element={<AdminDashboard />} />
                            <Route
                              path="verification"
                              element={<VerificationQueue />}
                            />
                            <Route path="review/:id" element={<DocumentReview />} />
                            <Route path="logs" element={<LogsAudit />} />
                            <Route path="users" element={<UserManagement />} />
                            <Route path="settings" element={<Settings />} />
                          </Routes>
                        </Suspense>
                      </main>
                    </div>
                  </div>
                </PrivateAdminAuth>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
