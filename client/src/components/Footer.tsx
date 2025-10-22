import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/assets/images/logo.jpg" 
                alt="الباندا" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              وجهتك الأولى لأرقى الأزياء النسائية ومستلزمات التجميل والعطور والإكسسوارات الفاخرة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition-colors">
                  منتجاتنا
                </a>
              </li>
              <li>
                <a href="/offers" className="text-gray-400 hover:text-white transition-colors">
                  العروض الخاصة
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-pink-400" />
                <a href="tel:+967779888856" className="hover:text-white transition-colors">+967 779 888 856</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-pink-400" />
                <a href="mailto:alpandafashions@gmail.com" className="hover:text-white transition-colors">alpandafashions@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-pink-400" />
                <span>شارع العدين أمام مركز جرعان، إب، اليمن</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/ALPANDAFASHION"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/alpandanew"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} مركز الباندا لأرقى الأزياء ومستلزمات التجميل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

