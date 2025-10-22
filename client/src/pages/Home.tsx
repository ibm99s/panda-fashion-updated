import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShoppingBag, Palette, Baby } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  const categories = [
    {
      title: "الأزياء النسائية",
      description: "أرقى وأحدث الموديلات في عالم الأزياء النسائية",
      icon: ShoppingBag,
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "ملابس الأطفال",
      description: "تشكيلة واسعة من ملابس الأطفال لجميع الفئات العمرية",
      icon: Baby,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "مستلزمات التجميل",
      description: "أفضل منتجات العناية بالبشرة والمكياج",
      icon: Sparkles,
      color: "from-rose-400 to-rose-600",
    },
    {
      title: "الإكسسوارات",
      description: "إكسسوارات أنيقة وعطور فاخرة لإطلالة متكاملة",
      icon: Palette,
      color: "from-amber-400 to-amber-600",
    },
  ];

  const featuredProducts = [
    { id: 1, image: "/assets/images/store-03.png", title: "أزياء نسائية راقية" },
    { id: 2, image: "/assets/images/store-04.png", title: "ملابس أطفال عصرية" },
    { id: 3, image: "/assets/images/store-06.png", title: "مستلزمات تجميل فاخرة" },
    { id: 4, image: "/assets/images/store-05.png", title: "إكسسوارات أنيقة" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/store-01.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              مرحباً بك في
              <br />
              <span className="text-pink-400">مركز الباندا</span>
            </h1>
            <p className="text-lg md:text-xl mb-2 text-gray-200 font-semibold">
              مفهوم التميز في عالم الأزياء وأدوات التجميل
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-300">
              الأناقة تبدأ من التفاصيل... نختار لكِ بعناية كل قطعة تجمع بين الفخامة والجودة والراحة
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg">
                  تصفح المنتجات
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  من نحن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أقسامنا المميزة
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نقدم لك تشكيلة متنوعة من المنتجات الراقية التي تلبي جميع احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon size={48} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {category.description}
                    </p>
                    <Link href="/products">
                      <Button variant="link" className="p-0 h-auto text-pink-600 hover:text-pink-700">
                        استكشف المزيد ←
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              من داخل المركز
            </h2>
            <p className="text-gray-600 text-lg">
              اكتشف أقسامنا المتنوعة وتشكيلاتنا الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="14" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(item.title) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-center">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button size="lg" variant="outline">
                عرض معرض الصور
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">14,000+</div>
              <div className="text-lg text-pink-100">متابع على وسائل التواصل</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg text-pink-100">تقييم إيجابي من العملاء</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
              <div className="text-lg text-pink-100">أقسام متنوعة</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            هل لديك استفسار؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                تواصل معنا
              </Button>
            </Link>
            <a
              href="https://wa.me/967779888856?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg bg-green-500 text-white border-green-500 hover:bg-green-600">
                واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

