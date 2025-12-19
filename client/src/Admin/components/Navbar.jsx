"use client";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function Navbar() {
  const user = useContext(UserContext);
  return (
    <nav className="h-16 flex items-center justify-between px-6 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-foreground">
          DocVerify
        </h1>
        <span className="text-sm text-muted-foreground px-2 py-1 bg-muted/20 rounded">
          Admin Panel
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">
            {user.user.name}
          </p>
          <p className="text-xs text-muted-foreground">{user.user.email}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
