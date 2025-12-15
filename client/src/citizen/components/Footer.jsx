import {
  FileText,
} from "lucide-react";
const Footer=()=>{
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-700" />
                <span className="font-semibold text-gray-900">eGov Portal</span>
              </div>
              <p className="text-sm text-gray-600">
                Secure document verification and management platform for
                citizens.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-gray-900"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/profile")}
                    className="hover:text-gray-900"
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Documents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Document Verification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Upload Documents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Track Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Download Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: support@egov.gov.in</li>
                <li>Phone: 1800-123-4567</li>
                <li>Hours: Mon-Fri, 9AM-6PM</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 eGov Document Portal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
export default Footer;