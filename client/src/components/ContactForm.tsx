import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "استفسار عام",
    message: "",
  });

  const subjects = [
    "استفسار عام",
    "استفسار عن منتج",
    "شكوى أو اقتراح",
    "طلب عرض سعر",
    "استفسار عن العروض",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `
*رسالة من موقع الباندا*

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
*الموضوع:* ${formData.subject}

*الرسالة:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/967779888856?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      subject: "استفسار عام",
      message: "",
    });
  };

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            أرسل لنا رسالة
          </h3>
          <p className="text-gray-600">
            املأ النموذج وسنتواصل معك عبر واتساب
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              placeholder="+967 xxx xxx xxx"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              الموضوع <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              الرسالة <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            <Send size={20} className="ml-2" />
            إرسال عبر واتساب
          </Button>

          <p className="text-xs text-gray-500 text-center">
            سيتم فتح واتساب تلقائياً مع رسالتك المنسقة
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

