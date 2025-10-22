import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "/assets/images/store-01.jpg",
      title: "واجهة المركز",
      description: "مدخل مركز الباندا الأنيق",
    },
    {
      id: 2,
      src: "/assets/images/store-02.jpg",
      title: "صالة العرض",
      description: "تصميم داخلي عصري ومريح",
    },
    {
      id: 3,
      src: "/assets/images/store-03.png",
      title: "قسم الأزياء النسائية",
      description: "تشكيلة واسعة من أرقى الأزياء",
    },
    {
      id: 4,
      src: "/assets/images/store-04.png",
      title: "ملابس الأطفال",
      description: "أحدث موديلات ملابس الأطفال",
    },
    {
      id: 5,
      src: "/assets/images/store-05.png",
      title: "قسم الإكسسوارات",
      description: "إكسسوارات أنيقة ومتنوعة",
    },
    {
      id: 6,
      src: "/assets/images/store-06.png",
      title: "مستلزمات التجميل",
      description: "أفضل منتجات العناية والتجميل",
    },
    {
      id: 7,
      src: "/assets/images/store-07.png",
      title: "ركن العطور",
      description: "عطور فاخرة ومميزة",
    },
    {
      id: 8,
      src: "/assets/images/store-08.png",
      title: "منطقة التسوق",
      description: "مساحة واسعة ومريحة",
    },
    {
      id: 9,
      src: "/assets/images/store-09.png",
      title: "عرض المنتجات",
      description: "ترتيب أنيق وجذاب",
    },
    {
      id: 10,
      src: "/assets/images/store-10.png",
      title: "قسم الأزياء الفاخرة",
      description: "أرقى وأحدث الموديلات",
    },
    {
      id: 11,
      src: "/assets/images/store-11.png",
      title: "ركن الإكسسوارات",
      description: "تشكيلة متنوعة ومميزة",
    },
    {
      id: 12,
      src: "/assets/images/store-12.png",
      title: "منطقة العرض المركزية",
      description: "تصميم عصري وجذاب",
    },
    {
      id: 13,
      src: "/assets/images/store-13.png",
      title: "ديكور المتجر",
      description: "تفاصيل أنيقة وراقية",
    },
    {
      id: 14,
      src: "/assets/images/store-14.jpg",
      title: "منتجات مميزة",
      description: "عرض خاص للمنتجات الفاخرة",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              معرض الصور
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              استكشف صور المركز من الداخل واطلع على أقسامنا المتنوعة
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' +
                          encodeURIComponent(image.title) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              زوروا متجرنا
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نرحب بزيارتكم لمتجرنا في شارع العدين أمام مركز جرعان، إب، للاطلاع على جميع المنتجات والاستمتاع بتجربة تسوق فريدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block"
              >
                <button className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium">
                  معلومات التواصل
                </button>
              </a>
              <a
                href="https://wa.me/967779888856?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                  تواصل عبر واتساب
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

