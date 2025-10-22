import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "967779888856"; // رقم الواتساب
  const whatsappMessage = "مرحباً، أود الاستفسار عن منتجاتكم في مركز الباندا";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+967779888856"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="اتصل الآن"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}

