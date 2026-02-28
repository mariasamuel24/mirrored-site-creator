import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClipboardList, Truck, Hammer, CheckCircle, BarChart3 } from "lucide-react";

const statusCards = [
  { label: "طلبات جديدة", count: 12, icon: ClipboardList, color: "bg-blue-100 text-blue-700" },
  { label: "في الطريق", count: 5, icon: Truck, color: "bg-yellow-100 text-yellow-700" },
  { label: "جاري التنفيذ", count: 8, icon: Hammer, color: "bg-orange-100 text-orange-700" },
  { label: "تم الانتهاء", count: 45, icon: CheckCircle, color: "bg-green-100 text-green-700" },
];

const recentOrders = [
  { id: "#1024", service: "سباكة", customer: "أحمد محمد", status: "تم الانتهاء", date: "2025-02-25" },
  { id: "#1025", service: "كهرباء", customer: "سارة علي", status: "جاري التنفيذ", date: "2025-02-26" },
  { id: "#1026", service: "تكييف", customer: "محمود حسن", status: "في الطريق", date: "2025-02-27" },
  { id: "#1027", service: "دهانات", customer: "فاطمة أحمد", status: "طلب جديد", date: "2025-02-28" },
  { id: "#1028", service: "نجارة", customer: "عمر خالد", status: "تم الانتهاء", date: "2025-02-24" },
  { id: "#1029", service: "تركيب مطبخ", customer: "نورا سعيد", status: "جاري التنفيذ", date: "2025-02-27" },
];

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    "تم الانتهاء": "bg-green-100 text-green-700",
    "جاري التنفيذ": "bg-orange-100 text-orange-700",
    "في الطريق": "bg-yellow-100 text-yellow-700",
    "طلب جديد": "bg-blue-100 text-blue-700",
  };
  return map[status] || "bg-muted text-muted-foreground";
};

const BookingsPage = () => {
  const totalOrders = statusCards.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">حجوزاتي</h1>
            <p className="text-muted-foreground text-lg">تتبع جميع طلباتك ومواعيدك</p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {statusCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="bg-card rounded-2xl p-5 border border-border/50">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{card.count}</div>
                  <div className="text-sm text-muted-foreground">{card.label}</div>
                </div>
              );
            })}
            <div className="bg-card rounded-2xl p-5 border border-primary/30">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-primary/10 text-primary">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold mb-1 text-primary">{totalOrders}</div>
              <div className="text-sm text-muted-foreground">إجمالي الطلبات</div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="p-5 border-b border-border/50">
              <h2 className="text-lg font-bold">آخر الطلبات</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-secondary/30">
                    <th className="text-right p-4 font-semibold">رقم الطلب</th>
                    <th className="text-right p-4 font-semibold">الخدمة</th>
                    <th className="text-right p-4 font-semibold">العميل</th>
                    <th className="text-right p-4 font-semibold">الحالة</th>
                    <th className="text-right p-4 font-semibold">التاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4">{order.service}</td>
                      <td className="p-4">{order.customer}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingsPage;
