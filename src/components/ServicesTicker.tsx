import { Droplets, Zap, Paintbrush, Wind, Hammer, UtensilsCrossed, Home, Layers } from "lucide-react";

const services = [
  { icon: Droplets, label: "سباكة" },
  { icon: Zap, label: "كهرباء" },
  { icon: Paintbrush, label: "دهانات" },
  { icon: Wind, label: "تكييف" },
  { icon: Hammer, label: "نجارة" },
  { icon: UtensilsCrossed, label: "مطابخ" },
  { icon: Home, label: "تشطيبات" },
  { icon: Layers, label: "محارة" },
];

const ServicesTicker = () => {
  const doubled = [...services, ...services];

  return (
    <div className="w-full bg-secondary/50 py-4 overflow-hidden border-y border-border/50">
      <div className="flex animate-scroll-rtl whitespace-nowrap">
        {doubled.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className="flex items-center gap-2 px-8 text-muted-foreground">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{service.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesTicker;
