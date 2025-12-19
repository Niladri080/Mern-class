import { FileText } from "lucide-react";
const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-xl py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent shadow-md">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DocVerify
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Secure document verification and management platform for citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/citizen" className="hover:text-foreground">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/citizen/profile" className="hover:text-foreground">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Documents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Document Verification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Upload Documents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Track Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Download Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@egov.gov.in"
                  className="hover:text-foreground"
                >
                  support@egov.gov.in
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:18001234567" className="hover:text-foreground">
                  1800-123-4567
                </a>
              </li>
              <li>Hours: Mon-Fri, 9AM-6PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DocVerify. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
