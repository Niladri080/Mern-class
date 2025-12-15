import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  LogOut,
  ArrowLeft,
  SettingsIcon,
  Bell,
  Shield,
  Trash2,
  AlertTriangle,
  RefreshCcw,
  User,
  Lock,
} from "lucide-react";

export default function SettingsPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearDataModal, setShowClearDataModal] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [documentUpdates, setDocumentUpdates] = useState(true);
  const [systemUpdates, setSystemUpdates] = useState(true);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false); // Declare the variable here

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      alert("Logged out successfully");
      // Redirect to login page
    }
  };

  const handleClearData = () => {
    alert("Account data cleared successfully");
    setShowClearDataModal(false);
  };

  const handleDeleteAccount = () => {
    alert(
      "Account deletion request submitted. Your account will be deleted within 30 days."
    );
    setShowDeleteAccountModal(false);
  };

  const handleChangePassword = () => {
    alert("Password change link sent to your registered email");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/citizen"
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <SettingsIcon className="w-7 h-7" />
          Account Settings
        </h1>

        <div className="space-y-6">
          {/* Account Preferences */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Account Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Language
                  </div>
                  <div className="text-sm text-gray-600">
                    Set your preferred language
                  </div>
                </div>
                <select className="px-3 py-2 border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Bengali</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Time Zone
                  </div>
                  <div className="text-sm text-gray-600">
                    Adjust time zone for accurate timestamps
                  </div>
                </div>
                <select className="px-3 py-2 border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>IST (India Standard Time)</option>
                  <option>GMT (Greenwich Mean Time)</option>
                  <option>EST (Eastern Standard Time)</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Date Format
                  </div>
                  <div className="text-sm text-gray-600">
                    Choose how dates are displayed
                  </div>
                </div>
                <select className="px-3 py-2 border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Email Notifications
                  </div>
                  <div className="text-sm text-gray-600">
                    Receive updates via email
                  </div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center border-2 transition-colors ${
                    emailNotifications
                      ? "bg-gray-800 border-gray-800"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                      emailNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    SMS Notifications
                  </div>
                  <div className="text-sm text-gray-600">
                    Receive updates via SMS
                  </div>
                </div>
                <button
                  onClick={() => setSmsNotifications(!smsNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center border-2 transition-colors ${
                    smsNotifications
                      ? "bg-gray-800 border-gray-800"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                      smsNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Document Status Updates
                  </div>
                  <div className="text-sm text-gray-600">
                    Notify when document status changes
                  </div>
                </div>
                <button
                  onClick={() => setDocumentUpdates(!documentUpdates)}
                  className={`relative inline-flex h-6 w-11 items-center border-2 transition-colors ${
                    documentUpdates
                      ? "bg-gray-800 border-gray-800"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                      documentUpdates ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    System Updates
                  </div>
                  <div className="text-sm text-gray-600">
                    Notify about system maintenance and updates
                  </div>
                </div>
                <button
                  onClick={() => setSystemUpdates(!systemUpdates)}
                  className={`relative inline-flex h-6 w-11 items-center border-2 transition-colors ${
                    systemUpdates
                      ? "bg-gray-800 border-gray-800"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                      systemUpdates ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Change Password
                  </div>
                  <div className="text-sm text-gray-600">
                    Update your account password
                  </div>
                </div>
                <Button
                  onClick={handleChangePassword}
                  size="sm"
                  className="bg-gray-800 text-white hover:bg-gray-900"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Two-Factor Authentication
                  </div>
                  <div className="text-sm text-gray-600">
                    Add an extra layer of security
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  Enable
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Active Sessions
                  </div>
                  <div className="text-sm text-gray-600">
                    Manage your active login sessions
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  View Sessions
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Logout from Account
                  </div>
                  <div className="text-sm text-gray-600">
                    Sign out from your current session
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <RefreshCcw className="w-5 h-5" />
              Data Management
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Download My Data
                  </div>
                  <div className="text-sm text-gray-600">
                    Download a copy of your account data
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  Download
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Clear Account Data
                  </div>
                  <div className="text-sm text-gray-600">
                    Remove all documents and activity history
                  </div>
                </div>
                <Button
                  onClick={() => setShowClearDataModal(true)}
                  size="sm"
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Clear Data
                </Button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white border-2 border-red-200 p-6">
            <h2 className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Danger Zone
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Delete Account
                  </div>
                  <div className="text-sm text-gray-600">
                    Permanently delete your account and all associated data
                  </div>
                </div>
                <Button
                  onClick={() => setShowDeleteModal(true)}
                  size="sm"
                  className="bg-red-700 text-white hover:bg-red-800"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
          </div>

          {/* Logout Section */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <LogOut className="w-5 h-5" />
              Logout
            </h2>
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Sign Out
                </div>
                <div className="text-sm text-gray-600">
                  Logout from your account and end your current session
                </div>
              </div>
              <Button
                onClick={handleLogout}
                size="sm"
                className="bg-gray-800 text-white hover:bg-gray-900"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Clear Data Confirmation Modal */}
      {showClearDataModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-gray-300 max-w-md w-full p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clear Account Data
                </h3>
                <p className="text-sm text-gray-600">
                  This will permanently delete all your uploaded documents and
                  activity history. Your account will remain active. This action
                  cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={handleClearData}
                className="flex-1 bg-orange-700 text-white hover:bg-orange-800"
              >
                Clear All Data
              </Button>
              <Button
                onClick={() => setShowClearDataModal(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-red-300 max-w-md w-full p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Delete Account
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  This action will permanently delete your account and all
                  associated data including:
                </p>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-3">
                  <li>All uploaded documents</li>
                  <li>Verification history</li>
                  <li>Activity logs</li>
                  <li>Personal information</li>
                </ul>
                <p className="text-sm font-medium text-red-700">
                  This action cannot be undone. Your account will be deleted
                  within 30 days.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={handleDeleteAccount}
                className="flex-1 bg-red-700 text-white hover:bg-red-800"
              >
                Delete My Account
              </Button>
              <Button
                onClick={() => setShowDeleteModal(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
