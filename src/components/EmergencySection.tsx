import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, CalendarClock } from "lucide-react";

const EmergencySection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">خدمتان سريعتان واحد</h2>
          <p className="text-muted-foreground text-lg">
            اختر النموذج المناسب — الطارئ أو المجدول — بنفس الجودة والاحترافية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Emergency */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">طوارئ فورية</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ماسورة مية انفجرت؟ الكهرباء قاطعة؟ تسريب غاز؟ اضغط زر الطوارئ والنظام تلقائياً بيلاقي أقرب فني متاح ويبعتهولك فوراً — السرعة أهم.
            </p>
            <Link to="/contact">
              <Button className="rounded-xl">اتصل بالطوارئ الآن</Button>
            </Link>
          </div>

          {/* Scheduled */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <CalendarClock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">خدمة عادية</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              اختار الفني اللي انت عايزه، حدد الميعاد والتاريخ المناسب ليك، وشوف التقييمات والأسعار قبل ما تحجز — كل حاجة في إيدك.
            </p>
            <Link to="/booking">
              <Button variant="outline" className="rounded-xl">احجز ميعاد</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
