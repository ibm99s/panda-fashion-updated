import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Facebook, Instagram, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف / واتساب",
      details: ["+967 779 888 856"],
      color: "from-blue-400 to-blue-600",
      link: "tel:+967779888856",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["alpandafashions@gmail.com"],
      color: "from-purple-400 to-purple-600",
      link: "mailto:alpandafashions@gmail.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["شارع العدين أمام مركز جرعان", "إب، اليمن"],
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 9 صباحاً - 10 مساءً", "الجمعة: 4 عصراً - 10 مساءً"],
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              تواصل معنا
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-pink-600 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  تابعنا على مواقع التواصل
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ابقَ على اطلاع بأحدث المنتجات والعروض الخاصة من خلال متابعتنا على:
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/ALPANDAFASHION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">فيسبوك</h3>
                      <p className="text-sm text-gray-600">تابعنا على فيسبوك</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/alpandanew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">إنستغرام</h3>
                      <p className="text-sm text-gray-600">تابعنا على إنستغرام</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold text-gray-800 mb-4">
                    تواصل معنا مباشرة
                  </h3>
                  <a
                    href="https://wa.me/967779888856?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600">
                      تواصل عبر واتساب
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  موقعنا على الخريطة
                </h2>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9499537267744!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع مركز الباندا"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  يمكنك تحديث إحداثيات الخريطة في الكود لتعكس الموقع الفعلي للمتجر
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                نحن هنا لمساعدتك
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                لديك استفسار؟ تواصل معنا الآن وسيسعدنا الرد على جميع أسئلتك في أقرب وقت ممكن.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">اتصل بنا</h4>
                    <p className="text-gray-600">نرد على مكالماتك خلال ساعات العمل</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">واتساب</h4>
                    <p className="text-gray-600">تواصل فوري ومباشر</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-600">نرد خلال 24 ساعة</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            نسعد بزيارتكم
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            فريقنا جاهز لاستقبالكم وتقديم أفضل خدمة ومساعدتكم في اختيار المنتجات المناسبة
          </p>
        </div>
      </section>
    </div>
  );
}

