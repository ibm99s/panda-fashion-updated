import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Sparkles, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "الفخامة",
      description: "نختار لكِ بعناية كل قطعة تجمع بين الفخامة والجودة والراحة",
    },
    {
      icon: Award,
      title: "التميز",
      description: "مفهوم التميز في عالم الأزياء وأدوات التجميل هو شعارنا",
    },
    {
      icon: Sparkles,
      title: "التفاصيل",
      description: "الأناقة تبدأ من التفاصيل، ونحن نهتم بكل تفصيلة صغيرة",
    },
    {
      icon: Users,
      title: "رضا العملاء",
      description: "نفخر بتقييم 100% من عملائنا الكرام وثقتهم المستمرة",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              من نحن
            </h1>
            <p className="text-xl text-pink-600 font-semibold mb-4">
              مفهوم التميز في عالم الأزياء وأدوات التجميل
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              مركز الباندا لأرقى الأزياء ومستلزمات التجميل - وجهتك المثالية للحصول على أفضل المنتجات الفاخرة في إب، اليمن
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  انطلق مركز الباندا من رؤية واضحة: أن نكون مفهوماً جديداً للتميز في عالم الأزياء ومستلزمات التجميل. نؤمن بأن <strong className="text-gray-800">الأناقة تبدأ من التفاصيل</strong>، ولهذا نختار لكِ بعناية فائقة كل قطعة تجمع بين الفخامة والجودة والراحة.
                </p>
                <p>
                  نحن نقدم تشكيلة متنوعة ومختارة بعناية من <strong className="text-gray-800">أرقى وأحدث الموديلات</strong> في عالم الأزياء النسائية، ملابس الأطفال لجميع الفئات، بالإضافة إلى إكسسوارات وأدوات التجميل الفاخرة.
                </p>
                <p>
                  مع أكثر من <strong className="text-pink-600">14,000 متابع</strong> على منصات التواصل الاجتماعي و<strong className="text-pink-600">تقييم 100%</strong> من عملائنا، نفخر بثقتكم المستمرة ونسعى دائماً لتقديم الأفضل.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/store-02.jpg"
                alt="مركز الباندا"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23f3f4f6" width="600" height="400"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3Eمركز الباندا%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  نسعى لتقديم تجربة تسوق استثنائية من خلال توفير أرقى وأحدث الموديلات في عالم الأزياء النسائية وملابس الأطفال ومستلزمات التجميل، مع الاهتمام بكل تفصيلة لضمان رضا عملائنا الكرام.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  أن نكون الوجهة الأولى والأكثر ثقة في عالم الأزياء والتجميل في اليمن، ونساهم في تعزيز ثقة المرأة والطفل بأنفسهم من خلال منتجات عالية الجودة تجمع بين الفخامة والراحة والأناقة.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Special */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              ما يميزنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">أرقى وأحدث الموديلات</h3>
                  <p className="text-gray-600">نواكب أحدث صيحات الموضة العالمية</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">ملابس الأطفال لجميع الفئات</h3>
                  <p className="text-gray-600">تشكيلة واسعة تناسب جميع الأعمار</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">إكسسوارات وأدوات تجميل</h3>
                  <p className="text-gray-600">منتجات عالية الجودة من أفضل العلامات</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">أرقى الملابس النسائية</h3>
                  <p className="text-gray-600">تصاميم راقية تجمع بين الأناقة والراحة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              قيمنا
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              المبادئ التي نلتزم بها في كل ما نقدمه لعملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl px-8 py-6 shadow-lg">
              <p className="text-3xl font-bold mb-2">14,000+</p>
              <p className="text-lg">متابع على وسائل التواصل</p>
            </div>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl px-8 py-6 shadow-lg mx-4 mt-4 md:mt-0">
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-lg">تقييم إيجابي من العملاء</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

