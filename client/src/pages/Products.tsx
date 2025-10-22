import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع المنتجات" },
    { id: "fashion", name: "الأزياء النسائية" },
    { id: "beauty", name: "مستلزمات التجميل" },
    { id: "perfumes", name: "العطور" },
    { id: "accessories", name: "الإكسسوارات" },
  ];

  const products = [
    {
      id: 1,
      name: "فستان سهرة راقي",
      category: "fashion",
      description: "فستان سهرة أنيق مصنوع من أجود الأقمشة",
      image: "/assets/images/fashion-store.webp",
    },
    {
      id: 2,
      name: "مجموعة مكياج فاخرة",
      category: "beauty",
      description: "مجموعة متكاملة من أفضل مستحضرات التجميل",
      image: "/assets/images/beauty-1.jpg",
    },
    {
      id: 3,
      name: "عطر نسائي راقي",
      category: "perfumes",
      description: "عطر فرنسي فاخر برائحة مميزة وثابتة",
      image: "/assets/images/beauty-2.webp",
    },
    {
      id: 4,
      name: "طقم مجوهرات",
      category: "accessories",
      description: "طقم مجوهرات أنيق مطلي بالذهب",
      image: "/assets/images/accessories-1.jpg",
    },
    {
      id: 5,
      name: "بلوزة كاجوال",
      category: "fashion",
      description: "بلوزة عصرية مناسبة للاستخدام اليومي",
      image: "/assets/images/fashion-store.webp",
    },
    {
      id: 6,
      name: "كريم العناية بالبشرة",
      category: "beauty",
      description: "كريم مرطب للعناية اليومية بالبشرة",
      image: "/assets/images/beauty-1.jpg",
    },
    {
      id: 7,
      name: "عطر عود فاخر",
      category: "perfumes",
      description: "عطر شرقي بخلاصة العود الطبيعي",
      image: "/assets/images/beauty-2.webp",
    },
    {
      id: 8,
      name: "حقيبة يد جلدية",
      category: "accessories",
      description: "حقيبة يد أنيقة من الجلد الطبيعي",
      image: "/assets/images/accessories-2.jpg",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              منتجاتنا
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              اكتشف تشكيلتنا المميزة من أرقى المنتجات العالمية
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="text-base"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f3f4f6" width="300" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' +
                          encodeURIComponent(product.name) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                لا توجد منتجات في هذا القسم حالياً
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا وسنساعدك في العثور على المنتج المثالي
          </p>
          <a
            href="https://wa.me/967779888856?text=مرحباً،%20أود%20الاستفسار%20عن%20منتجاتكم"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-lg">
              تواصل عبر واتساب
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

