import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "ما هي ساعات عمل المركز؟",
      answer: "نحن نعمل من السبت إلى الخميس من الساعة 9 صباحاً حتى 10 مساءً، ويوم الجمعة من الساعة 4 عصراً حتى 10 مساءً.",
    },
    {
      question: "أين يقع مركز الباندا؟",
      answer: "يقع المركز في شارع العدين أمام مركز جرعان، إب، اليمن. يمكنك الاطلاع على الخريطة في صفحة تواصل معنا.",
    },
    {
      question: "هل المنتجات أصلية؟",
      answer: "نعم، جميع منتجاتنا أصلية 100% ومضمونة من مصادر موثوقة. نحن نختار بعناية فائقة كل قطعة لضمان الجودة والفخامة.",
    },
    {
      question: "ما هي الأقسام المتوفرة في المركز؟",
      answer: "نوفر أربعة أقسام رئيسية: الأزياء النسائية الراقية، ملابس الأطفال لجميع الفئات العمرية، مستلزمات التجميل والعناية، والإكسسوارات والعطور الفاخرة.",
    },
    {
      question: "هل يمكن الطلب عبر الواتساب؟",
      answer: "نعم، يمكنك التواصل معنا مباشرة عبر الواتساب على الرقم +967 779 888 856 للاستفسار عن المنتجات أو الطلب.",
    },
    {
      question: "هل تقدمون خدمة التوصيل؟",
      answer: "يرجى التواصل معنا عبر الواتساب أو الهاتف للاستفسار عن خدمة التوصيل والمناطق المتاحة.",
    },
    {
      question: "كيف يمكنني متابعة أحدث المنتجات والعروض؟",
      answer: "يمكنك متابعتنا على فيسبوك (@ALPANDAFASHION) وإنستغرام (@alpandanew) للاطلاع على أحدث المنتجات والعروض الخاصة.",
    },
    {
      question: "هل يمكن استبدال أو إرجاع المنتجات؟",
      answer: "نحن نهتم برضا عملائنا. للاستفسار عن سياسة الاستبدال والإرجاع، يرجى التواصل معنا مباشرة.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعاً حول مركز الباندا ومنتجاتنا
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mr-11">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/967779888856?text=مرحباً،%20لدي%20استفسار"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-lg">
                تواصل عبر واتساب
              </button>
            </a>
            <a href="tel:+967779888856">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg">
                اتصل الآن
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

