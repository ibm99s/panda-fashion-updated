import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, Clock, Sparkles } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "خصم 25% على الأزياء النسائية",
      description: "احصلي على خصم 25% على جميع الأزياء النسائية الراقية",
      image: "/assets/images/store-03.png",
      discount: "25%",
      validUntil: "نهاية الشهر",
      category: "أزياء نسائية",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "عرض خاص على ملابس الأطفال",
      description: "اشتري قطعتين واحصل على الثالثة مجاناً",
      image: "/assets/images/store-04.png",
      discount: "1+2",
      validUntil: "لفترة محدودة",
      category: "ملابس أطفال",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      title: "خصم 30% على مستلزمات التجميل",
      description: "عروض حصرية على أفضل منتجات العناية والتجميل",
      image: "/assets/images/store-06.png",
      discount: "30%",
      validUntil: "حتى نفاد الكمية",
      category: "مستلزمات تجميل",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 4,
      title: "عرض الإكسسوارات الفاخرة",
      description: "خصم يصل إلى 20% على جميع الإكسسوارات والعطور",
      image: "/assets/images/store-05.png",
      discount: "20%",
      validUntil: "هذا الأسبوع فقط",
      category: "إكسسوارات",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const seasonalOffers = [
    {
      title: "مجموعة الربيع الجديدة",
      description: "اكتشفي أحدث صيحات الموضة لموسم الربيع",
      badge: "جديد",
      color: "bg-green-500",
    },
    {
      title: "عروض نهاية الموسم",
      description: "خصومات تصل إلى 50% على مجموعة مختارة",
      badge: "خصم 50%",
      color: "bg-red-500",
    },
    {
      title: "عرض الحزمة الكاملة",
      description: "اشتري طقم كامل واحصل على خصم إضافي 15%",
      badge: "عرض خاص",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles size={20} />
              <span className="text-sm font-semibold">عروض حصرية</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              العروض الخاصة
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              استمتعي بأفضل العروض والخصومات على منتجاتنا الفاخرة
            </p>
          </div>
        </div>
      </section>

      {/* Main Offers */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عروض هذا الشهر
            </h2>
            <p className="text-gray-600 text-lg">
              لا تفوتي فرصة الحصول على منتجاتك المفضلة بأسعار مميزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(offer.title) + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    {/* Discount Badge */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-br ${offer.color} text-white px-6 py-3 rounded-full shadow-lg`}>
                      <div className="text-2xl font-bold">{offer.discount}</div>
                      <div className="text-xs">خصم</div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{offer.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock size={16} className="text-pink-500" />
                      <span>ساري حتى: {offer.validUntil}</span>
                    </div>
                    <a
                      href={`https://wa.me/967779888856?text=مرحباً،%20أود%20الاستفسار%20عن%20${encodeURIComponent(offer.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full" size="lg">
                        اطلب الآن عبر واتساب
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عروض موسمية
            </h2>
            <p className="text-gray-600 text-lg">
              عروض خاصة لفترة محدودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-block ${offer.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                    {offer.badge}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {offer.description}
                  </p>
                  <a
                    href="https://wa.me/967779888856?text=مرحباً،%20أود%20معرفة%20المزيد%20عن%20العروض"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      اعرف المزيد
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <Tag size={48} className="text-pink-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              لا تفوتي العروض!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              تابعينا على وسائل التواصل الاجتماعي لتكوني أول من يعرف عن العروض والخصومات الجديدة
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.facebook.com/ALPANDAFASHION"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  تابعنا على فيسبوك
                </Button>
              </a>
              <a
                href="https://www.instagram.com/alpandanew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  تابعنا على إنستغرام
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

