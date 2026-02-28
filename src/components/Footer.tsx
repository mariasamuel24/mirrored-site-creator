import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "الأسعار", href: "/pricing" },
  { label: "آراء العملاء", href: "/reviews" },
  { label: "حجوزاتي", href: "/bookings" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">
              Fix<span className="text-primary">ly</span>
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:opacity-100 hover:text-primary transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm opacity-50">© 2025 Fixly. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
