import { useState } from "react";
import { Wrench, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "الأسعار", href: "/pricing" },
  { label: "آراء العملاء", href: "/reviews" },
  { label: "حجوزاتي", href: "/bookings" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">
            Fix<span className="text-primary">ly</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link to="/request-service">
            <Button size="sm" className="rounded-full">
              اطلب خدمة الآن
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/dashboard" className="flex-1">
              <Button variant="outline" size="sm" className="rounded-full w-full">Dashboard</Button>
            </Link>
            <Link to="/request-service" className="flex-1">
              <Button size="sm" className="rounded-full w-full">اطلب خدمة الآن</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
