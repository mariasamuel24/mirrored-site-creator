import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">
              Fix<span className="text-primary">ly</span>
            </span>
          </Link>

          <div className="flex gap-6 text-sm opacity-70">
            <Link to="/services" className="hover:opacity-100 transition-opacity">خدماتنا</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">ماذا عنا</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">تواصل معنا</Link>
          </div>

          <p className="text-sm opacity-50">© 2025 Fixly. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
