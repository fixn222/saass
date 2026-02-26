import { Link } from "react-router";
import { Globe2, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#0F172A]">CNI Global</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/countries" className="text-sm text-[#64748B] hover:text-[#1E40AF] transition-colors">
              Countries
            </Link>
            <Link to="/ai-assistant" className="text-sm text-[#64748B] hover:text-[#1E40AF] transition-colors">
              AI Assistant
            </Link>
            <Link to="/client-dashboard" className="text-sm text-[#64748B] hover:text-[#1E40AF] transition-colors">
              Dashboard
            </Link>
            <Link to="/admin-dashboard" className="text-sm text-[#64748B] hover:text-[#1E40AF] transition-colors">
              Admin
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white rounded-xl px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
