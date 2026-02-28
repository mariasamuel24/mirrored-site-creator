import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="بيت مودرن دافئ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/70 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl mr-auto text-right">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            أوبر الصيانة{" "}
            <br />
            <span className="text-primary">لباب بيتك</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            ما تلفش وتدور على فني — اطلب من Fixly وهنيجيلك لحد باب البيت.
            <br />
            سريع، موثوق، ومضمون.
          </p>
          <div className="flex gap-4 justify-start">
            <Link to="/booking">
              <Button size="lg" className="rounded-xl text-base px-8 py-6">
                احجز الآن
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="rounded-xl text-base px-8 py-6 bg-background/50 backdrop-blur-sm">
                خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
