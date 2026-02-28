import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Send } from "lucide-react";

const serviceTypes = [
  "سباكة",
  "كهرباء",
  "تكييف وتبريد",
  "نجارة",
  "دهانات",
  "تركيب مطبخ",
  "محارة وجبس",
  "تشطيبات",
];

const RequestServicePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    area: "",
    neighborhood: "",
    street: "",
    apartment: "",
    preferredTime: "",
    serviceType: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.serviceType) {
      toast.error("من فضلك املأ البيانات المطلوبة");
      return;
    }
    toast.success("تم إرسال طلبك بنجاح! هنتواصل معاك قريباً");
    setFormData({
      fullName: "", phone: "", whatsapp: "", area: "", neighborhood: "",
      street: "", apartment: "", preferredTime: "", serviceType: "", description: "",
    });
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">اطلب خدمة الآن</h1>
            <p className="text-muted-foreground text-lg">املأ البيانات وهنتواصل معاك في أسرع وقت</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 space-y-6">
            {/* Personal Info */}
            <div>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b border-border/50">البيانات الشخصية</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">الاسم بالكامل *</Label>
                  <Input id="fullName" placeholder="محمد أحمد" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input id="phone" type="tel" placeholder="01xxxxxxxxx" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="whatsapp">رقم الواتساب</Label>
                  <Input id="whatsapp" type="tel" placeholder="01xxxxxxxxx" value={formData.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b border-border/50">العنوان</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">المنطقة</Label>
                  <Input id="area" placeholder="مثال: المعادي" value={formData.area} onChange={(e) => handleChange("area", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="neighborhood">الحي</Label>
                  <Input id="neighborhood" placeholder="مثال: حي أول" value={formData.neighborhood} onChange={(e) => handleChange("neighborhood", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">الشارع</Label>
                  <Input id="street" placeholder="اسم الشارع" value={formData.street} onChange={(e) => handleChange("street", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apartment">رقم الشقة</Label>
                  <Input id="apartment" placeholder="مثال: 5" value={formData.apartment} onChange={(e) => handleChange("apartment", e.target.value)} />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h2 className="text-lg font-bold mb-4 pb-2 border-b border-border/50">تفاصيل الخدمة</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>نوع الخدمة *</Label>
                  <Select value={formData.serviceType} onValueChange={(v) => handleChange("serviceType", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>الفترة المفضلة</Label>
                  <Select value={formData.preferredTime} onValueChange={(v) => handleChange("preferredTime", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الوقت" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">صباحاً (8 ص - 12 م)</SelectItem>
                      <SelectItem value="evening">مساءً (2 م - 8 م)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="description">وصف المشكلة</Label>
                  <Textarea
                    id="description"
                    placeholder="اوصف المشكلة بالتفصيل..."
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2 sm:col-span-2">
                  <Label>صورة المشكلة (مهمة جداً)</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {imagePreview ? (
                      <img src={imagePreview} alt="صورة المشكلة" className="max-h-40 mx-auto rounded-lg" />
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
                        <p className="text-sm text-muted-foreground">اضغط أو اسحب الصورة هنا</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl text-base gap-2">
              <Send className="w-4 h-4" />
              إرسال الطلب
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestServicePage;
