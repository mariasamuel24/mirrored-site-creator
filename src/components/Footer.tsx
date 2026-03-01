import { Wrench, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">
                Fix<span className="text-primary">ly</span>
              </span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              أوبر الصيانة المنزلية - اطلب فني محترف لباب بيتك في دقائق
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 hover:text-primary transition-all">الرئيسية</Link></li>
              <li><Link to="/services" className="hover:opacity-100 hover:text-primary transition-all">خدماتنا</Link></li>
              <li><Link to="/about" className="hover:opacity-100 hover:text-primary transition-all">ماذا عنا</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 hover:text-primary transition-all">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>سباكة</li>
              <li>كهرباء</li>
              <li>نجارة</li>
              <li>تكييف وتبريد</li>
              <li>دهانات</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <p className="text-sm opacity-70 mb-4">القاهرة، مصر</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-sm opacity-50">© 2026 Fixly. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
