# دليل النشر السريع على Netlify

## الخطوات الأساسية (5 دقائق)

### 1️⃣ رفع المشروع إلى GitHub

```bash
cd /home/ubuntu/panda-fashion
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

إذا لم يكن لديك مستودع GitHub:
1. أنشئ مستودع جديد على [github.com](https://github.com/new)
2. نفذ الأوامر:
```bash
git remote add origin https://github.com/YOUR_USERNAME/panda-fashion.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ النشر على Netlify

1. سجل دخول على [netlify.com](https://netlify.com) باستخدام حساب GitHub
2. اضغط **"Add new site"** → **"Import an existing project"**
3. اختر **"Deploy with GitHub"**
4. اختر مستودع `panda-fashion`
5. أدخل الإعدادات:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Branch**: `main`
6. اضغط **"Deploy site"**

---

### 3️⃣ ربط النطاق (اختياري)

1. في Netlify، اذهب إلى **Domain settings**
2. اضغط **"Add custom domain"**
3. أدخل `alpandacenter.com`
4. اتبع تعليمات تحديث DNS

---

## ملاحظات مهمة

✅ **الموقع جاهز للنشر** - جميع الإعدادات موجودة
✅ **لا حاجة لمتغيرات بيئة** - الموقع يعمل كموقع عرض فقط
✅ **النشر التلقائي** - أي تحديث في GitHub سيُنشر تلقائياً
✅ **HTTPS مجاني** - شهادة SSL تلقائية

---

## الملفات المضافة

- ✅ `netlify.toml` - إعدادات Netlify
- ✅ `client/public/_redirects` - قواعد التوجيه
- ✅ `.gitignore` - محدث لـ Netlify

---

## الدعم

للدليل الكامل المفصل، راجع: `دليل_النشر_على_Netlify.md`

