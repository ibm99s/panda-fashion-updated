import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "فاطمة أحمد",
      rating: 5,
      comment: "منتجات رائعة وجودة عالية، خدمة ممتازة وأسعار مناسبة. أنصح الجميع بزيارة المركز",
      date: "منذ أسبوع",
    },
    {
      id: 2,
      name: "سارة محمد",
      rating: 5,
      comment: "أفضل مكان للتسوق في إب! تشكيلة واسعة ومتنوعة من الأزياء الراقية ومستلزمات التجميل",
      date: "منذ أسبوعين",
    },
    {
      id: 3,
      name: "نورة علي",
      rating: 5,
      comment: "الأناقة تبدأ من التفاصيل فعلاً! كل قطعة مختارة بعناية. شكراً لمركز الباندا",
      date: "منذ شهر",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            آراء عملائنا
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نفخر بثقة عملائنا وتقييمهم الإيجابي لخدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="font-bold text-pink-600">100%</span> تقييم إيجابي من عملائنا
          </p>
        </div>
      </div>
    </section>
  );
}

