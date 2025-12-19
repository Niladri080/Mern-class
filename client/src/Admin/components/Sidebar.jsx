import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileCheck,
  FileText,
  Users,
  Settings,
} from "lucide-react";

function Sidebar() {
  const navItems = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    {
      path: "/admin/verification",
      icon: FileCheck,
      label: "Verification Queue",
    },
    { path: "/admin/logs", icon: FileText, label: "Logs & Audit" },
    { path: "/admin/users", icon: Users, label: "User Management" },
    { path: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-background/80 backdrop-blur-md border-r border-border flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">eG</span>
          </div>
          <div>
            <p className="font-semibold text-foreground">Admin</p>
            <p className="text-xs text-muted-foreground">Control Panel</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 mb-1 rounded transition-colors ${
                isActive
                  ? "bg-gradient-to-tr from-primary to-accent text-white shadow-md"
                  : "text-foreground/80 hover:bg-muted/50"
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
