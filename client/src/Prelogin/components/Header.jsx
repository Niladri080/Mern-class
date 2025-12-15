import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <svg
                className="h-5 w-5 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold text-foreground">
              DocVerify
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => {
                navigate("/about");
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a
              onClick={() => {
                navigate("/contact");
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </nav>

          <Button
            onClick={() => {
              navigate("/signup");
            }}
            size="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
