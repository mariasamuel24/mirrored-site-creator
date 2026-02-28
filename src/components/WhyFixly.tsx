import { Camera, CheckCircle, Shield, UserCheck, CreditCard, MapPin, Star, Package } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "وداعاً لسوء الفهم",
    desc: "صورتك بتشرح للفني كل حاجة قبل ما ييجي — مش محتاج تشرح بالكلام",
  },
  {
    icon: CheckCircle,
    title: "زيارة واحدة تكفي",
    desc: "وقتك غالي — بنخلص المهمة من أول مرة بدون رجعة تانية",
  },
  {
    icon: Shield,
    title: "ضمان الخدمة",
    desc: "كل إصلاح مضمون لمدة أشهر — لو رجعت المشكلة، بنيجي مجاناً",
  },
  {
    icon: UserCheck,
    title: "فنيين معتمدون",
    desc: "كل فنيينا حاصلون على شهادات احترافية وخضعوا لاختبارات صارمة",
  },
  {
    icon: CreditCard,
    title: "دفع بعد الخدمة",
    desc: "ادفع كاش أو بطاقة أو تحويل بعد ما تتأكد من اكتمال العمل",
  },
  {
    icon: MapPin,
    title: "تتبع الطلب",
    desc: "تابع موقع الفني وحالة طلبك لحظة بلحظة عبر الخريطة التفاعلية",
  },
  {
    icon: Star,
    title: "تقييمات حقيقية",
    desc: "تقييمات شفافة ومراجعات من عملاء حقيقيين لضمان أفضل جودة",
  },
  {
    icon: Package,
    title: "قطع غيار جاهزة",
    desc: "الفني بيشتري القطعة الناقصة وهو في طريقه إليك — مش محتاج ينتظر",
  },
];

const WhyFixly = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">ليه تختار Fixly؟</h2>
          <p className="text-muted-foreground text-lg">أوبر الصيانة لباب بيتك — سريع لأنقاذك منزلك</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyFixly;
