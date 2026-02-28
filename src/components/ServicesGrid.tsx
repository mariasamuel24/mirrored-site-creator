import servicePlumbing from "@/assets/service-plumbing.jpg";
import serviceCarpentry from "@/assets/service-carpentry.jpg";
import serviceAc from "@/assets/service-ac.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";

const services = [
  { title: "سباكة", desc: "إصلاح وتركيب جميع أعمال السباكة", img: servicePlumbing },
  { title: "نجارة", desc: "تفصيل وإصلاح الأثاث والأبواب", img: serviceCarpentry },
  { title: "تكييف وتبريد", desc: "صيانة وتركيب أجهزة التكييف", img: serviceAc },
  { title: "دهانات", desc: "دهان وتجديد الحوائط والأسقف", img: servicePainting },
  { title: "كهرباء", desc: "أعمال الكهرباء والتوصيلات", img: serviceElectrical },
  { title: "تركيب مطابخ", desc: "تصميم وتركيب المطابخ العصرية", img: serviceKitchen },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">خدماتنا</h2>
          <p className="text-muted-foreground text-lg">كل اللي بيتك محتاجه في مكان واحد</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
