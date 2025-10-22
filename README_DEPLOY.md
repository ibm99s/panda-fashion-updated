# 🚀 نشر موقع الباندا - دليل سريع

## الطريقة الأسهل والأسرع

### الخطوة 1: إنشاء حساب Vercel (دقيقة واحدة)
1. اذهب إلى: **https://vercel.com/signup**
2. اضغط **"Continue with GitHub"**
3. سجّل حساب GitHub إذا لم يكن لديك (مجاني)
4. وافق على الأذونات
5. ✅ تم!

---

### الخطوة 2: رفع المشروع (5 دقائق)

#### الطريقة الأولى: عبر GitHub (موصى بها)

**أ) إنشاء مستودع GitHub:**
1. اذهب إلى: **https://github.com/new**
2. اسم المستودع: `panda-fashion`
3. اختر **Public**
4. اضغط **"Create repository"**

**ب) رفع الملفات:**
1. فك ضغط ملف `panda-fashion-deploy.zip`
2. في صفحة المستودع، اضغط **"uploading an existing file"**
3. اسحب **جميع** الملفات والمجلدات
4. اضغط **"Commit changes"**

**ج) الاستيراد في Vercel:**
1. في Vercel، اضغط **"Add New..." → "Project"**
2. اختر **"Import Git Repository"**
3. اختر `panda-fashion`
4. اضغط **"Import"**

#### الطريقة الثانية: عبر Vercel CLI (للمحترفين)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
cd panda-fashion
vercel
```

---

### الخطوة 3: إعدادات النشر

في صفحة الإعدادات:

1. **Framework Preset:** Vite ✅
2. **Build Command:** `pnpm build`
3. **Output Directory:** `dist`
4. **Install Command:** `pnpm install`

**Environment Variables (مهم!):**
```
DATABASE_URL=سيتم توفيره
JWT_SECRET=سيتم توفيره
VITE_APP_TITLE=مركز الباندا للأزياء
```

اضغط **"Deploy"** 🚀

---

### الخطوة 4: ربط النطاق من Hostinger (10 دقائق)

#### في Vercel:
1. اذهب إلى **Settings → Domains**
2. أضف نطاقك: `alpanda.shop`
3. انسخ معلومات DNS:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

#### في Hostinger:
1. اذهب إلى: **https://hpanel.hostinger.com**
2. **Domains → [نطاقك] → DNS Zone**
3. أضف سجل A:
   - Name: `@`
   - Points to: `76.76.21.21`
4. أضف سجل CNAME:
   - Name: `www`
   - Points to: `cname.vercel-dns.com`
5. احذف السجلات القديمة

انتظر 5-30 دقيقة ✅

---

### الخطوة 5: إعداد قاعدة البيانات (5 دقائق)

#### الخيار 1: PlanetScale (موصى به)
1. اذهب إلى: **https://planetscale.com/signup**
2. سجّل حساب مجاني
3. أنشئ قاعدة بيانات: `panda-fashion`
4. اذهب إلى **Connect** → **Prisma**
5. انسخ `DATABASE_URL`
6. أضفها في Vercel Environment Variables

#### الخيار 2: Supabase
1. اذهب إلى: **https://supabase.com/dashboard**
2. أنشئ مشروع جديد
3. اذهب إلى **Settings → Database**
4. انسخ **Connection String**
5. أضفها في Vercel Environment Variables

---

## ✅ تم! موقعك الآن جاهز

- 🌐 الموقع: **https://alpanda.shop**
- 🔐 لوحة التحكم: **https://alpanda.shop/admin/products**
- ⚡ سرعة فائقة
- 🆓 استضافة مجانية
- 🔒 SSL تلقائي

---

## 📞 الدعم

إذا واجهت أي مشكلة، تواصل معي مباشرة!

---

**موفق! 🚀**

