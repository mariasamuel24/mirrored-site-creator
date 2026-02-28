import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const pricingData = [
  {
    service: "سباكة",
    items: [
      { name: "كشف تسريب مياه", price: "150 - 300 ج.م" },
      { name: "تغيير حنفية", price: "100 - 200 ج.م" },
      { name: "تسليك مجاري", price: "200 - 400 ج.م" },
      { name: "تركيب سخان مياه", price: "250 - 500 ج.م" },
    ],
  },
  {
    service: "كهرباء",
    items: [
      { name: "إصلاح عطل كهربائي", price: "100 - 250 ج.م" },
      { name: "تركيب لمبات/نجف", price: "80 - 180 ج.م" },
      { name: "تغيير مفتاح/بريزة", price: "50 - 120 ج.م" },
      { name: "تمديد أسلاك", price: "200 - 500 ج.م" },
    ],
  },
  {
    service: "تكييف وتبريد",
    items: [
      { name: "تنظيف تكييف (وحدة)", price: "200 - 350 ج.م" },
      { name: "شحن فريون", price: "300 - 600 ج.م" },
      { name: "تركيب تكييف جديد", price: "500 - 1000 ج.م" },
      { name: "إصلاح أعطال", price: "250 - 700 ج.م" },
    ],
  },
  {
    service: "نجارة",
    items: [
      { name: "إصلاح باب", price: "150 - 350 ج.م" },
      { name: "تركيب أرفف", price: "100 - 250 ج.م" },
      { name: "إصلاح أثاث", price: "200 - 500 ج.م" },
      { name: "تفصيل خزانة", price: "1500 - 4000 ج.م" },
    ],
  },
  {
    service: "دهانات",
    items: [
      { name: "دهان غرفة (حتى 20 م²)", price: "800 - 1500 ج.م" },
      { name: "دهان شقة كاملة", price: "3000 - 8000 ج.م" },
      { name: "معجون + دهان", price: "1200 - 2500 ج.م" },
      { name: "ديكورات حوائط", price: "500 - 1500 ج.م" },
    ],
  },
  {
    service: "تركيب مطابخ",
    items: [
      { name: "تركيب مطبخ خشب (المتر)", price: "1200 - 2500 ج.م" },
      { name: "تركيب مطبخ ألوميتال (المتر)", price: "800 - 1500 ج.م" },
      { name: "تغيير رخامة", price: "500 - 1200 ج.م" },
      { name: "إصلاح أدراج/أبواب", price: "100 - 300 ج.م" },
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">لائحة الأسعار</h1>
            <p className="text-muted-foreground text-lg">أسعار شفافة بدون مفاجآت — اللي تشوفه هو اللي تدفعه</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingData.map((category) => (
              <div
                key={category.service}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="bg-primary/5 p-5 border-b border-border/50">
                  <h2 className="text-xl font-bold">{category.service}</h2>
                </div>
                <div className="p-5 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-sm text-primary font-bold">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-6 border border-primary/20 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              * الأسعار تشمل العمالة فقط وقد تختلف حسب حجم المشكلة والمواد المطلوبة.
              <br />
              يتم تحديد السعر النهائي بعد معاينة الفني ويتم الدفع بعد اكتمال العمل.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
