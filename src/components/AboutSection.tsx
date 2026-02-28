const stats = [
  { value: "+١٠٠٠", label: "عميل سعيد" },
  { value: "+٥٠", label: "فني معتمد" },
  { value: "+٨", label: "خدمة متنوعة" },
  { value: "٤.٨⭐", label: "تقييم عام" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">من نحن</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Fixly اتأسست عشان تحل مشكلة واحدة كبيرة — الفني بيعمل زيارتين وبيروح بدون ما يصلح. بنينا نظام بيضمن إن مشكلتك تتحل من أول مرة.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            زي ما أوبر غيّر تجربة التاكسي — Fixly بيغير تجربة الصيانة المنزلية. الصورة بتشرح، والفني بييجي جاهز.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-5 border border-border/50 text-center">
            <p className="text-sm text-muted-foreground">الصورة هي المفتاح — صورة العطل بتوصلنا قبل الزيارة فالفني بييجي جاهز 100%</p>
          </div>
          <div className="bg-card rounded-2xl p-5 border border-border/50 text-center">
            <p className="text-sm text-muted-foreground">فنيون مختارون بعناية بناءً على تقييمات العملاء والخبرة الموثقة</p>
          </div>
          <div className="bg-card rounded-2xl p-5 border border-border/50 text-center">
            <p className="text-sm text-muted-foreground">تتبع لحظي — اعرف مكان الفني بالضبط ومتى يوصلك</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
