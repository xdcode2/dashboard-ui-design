import { useTheme } from "@/hooks/use-theme";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

import {
  Bell,
  ChevronsLeft,
  Moon,
  Search,
  Sun,
  LogOut,
} from "lucide-react";

import profileImg from "@/assets/profile-image.jpg";

import PropTypes from "prop-types";

export const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="input">
          <Search
            size={20}
            className="text-slate-300"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun
            size={20}
            className="dark:hidden"
          />
          <Moon
            size={20}
            className="hidden dark:block"
          />
        </button>
        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <button className="size-10 overflow-hidden rounded-full">
          <img
            src={profileImg}
            alt="profile image"
            className="size-full object-cover"
          />
        </button>

        {/* 🚀 Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut size={18} />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
