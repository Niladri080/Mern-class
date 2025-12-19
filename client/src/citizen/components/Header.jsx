import { Button } from "@/components/ui/button";
import { FileText, User, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { motion } from "framer-motion";
const Header = () => {
  const location=useLocation();
  const user=useContext(UserContext);
  const [admin, setAdmin] = useState(null);
  useEffect(()=>{
    setAdmin(user)
  }, [user])
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
        <div className="flex h-20 items-center justify-between rounded-full bg-background/80 shadow-lg px-4 md:px-8 my-3">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg border-4 border-background"
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="h-8 w-8 text-primary-foreground"
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
            </motion.div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4 py-2 rounded-full">
              DocVerify
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full w-10 h-10 hover:bg-gray-100 transition-all"
            >
              <Link to="/citizen/profile">
                <User className="w-5 h-5 text-gray-700" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full w-10 h-10 hover:bg-gray-100 transition-all"
            >
              <Link to="/citizen/settings">
                <Settings className="w-5 h-5 text-gray-700" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Header;
