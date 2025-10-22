# 🚀 دليل نشر موقع الباندا على Vercel

## 📋 المتطلبات
- ✅ حساب Vercel (مجاني)
- ✅ حساب GitHub (مجاني)
- ✅ نطاق من Hostinger

---

## الجزء الأول: إنشاء حساب GitHub ورفع المشروع

### الخطوة 1: إنشاء حساب GitHub

1. اذهب إلى: **https://github.com**
2. اضغط **"Sign up"**
3. أدخل:
   - البريد الإلكتروني
   - كلمة المرور
   - اسم المستخدم
4. أكمل التحقق
5. اضغط **"Create account"**

---

### الخطوة 2: إنشاء مستودع جديد (Repository)

1. بعد تسجيل الدخول، اضغط **"+"** في الأعلى
2. اختر **"New repository"**
3. املأ البيانات:
   - **Repository name:** `panda-fashion`
   - **Description:** موقع مركز الباندا للأزياء
   - **Public** ✅ (اختر هذا)
   - **لا تضف** README أو .gitignore
4. اضغط **"Create repository"**

---

### الخطوة 3: رفع ملفات المشروع

سأعطيك ملف ZIP كامل للمشروع. بعد تحميله:

#### الطريقة الأولى: عبر واجهة GitHub (الأسهل)

1. افتح المستودع الذي أنشأته
2. اضغط **"uploading an existing file"**
3. اسحب جميع ملفات المشروع (بعد فك الضغط)
4. اضغط **"Commit changes"**
5. انتظر اكتمال الرفع

#### الطريقة الثانية: عبر GitHub Desktop (موصى به)

1. حمّل **GitHub Desktop** من: https://desktop.github.com
2. ثبّته وسجّل الدخول
3. اضغط **"Add"** → **"Add existing repository"**
4. اختر مجلد المشروع
5. اضغط **"Publish repository"**

---

## الجزء الثاني: نشر الموقع على Vercel

### الخطوة 1: إنشاء حساب Vercel

1. اذهب إلى: **https://vercel.com**
2. اضغط **"Sign Up"**
3. اختر **"Continue with GitHub"** ✅
4. وافق على الأذونات
5. ✅ تم! حسابك جاهز

---

### الخطوة 2: استيراد المشروع من GitHub

1. في لوحة تحكم Vercel، اضغط **"Add New..."**
2. اختر **"Project"**
3. اضغط **"Import Git Repository"**
4. ابحث عن **"panda-fashion"**
5. اضغط **"Import"**

---

### الخطوة 3: إعدادات المشروع

ستظهر لك صفحة الإعدادات:

#### أ) Framework Preset:
- اختر: **Vite** ✅

#### ب) Root Directory:
- اتركه كما هو: **`.`**

#### ج) Build Command:
- اتركه كما هو: **`pnpm build`**

#### د) Output Directory:
- اتركه كما هو: **`dist`**

#### هـ) Install Command:
- اتركه كما هو: **`pnpm install`**

---

### الخطوة 4: إضافة متغيرات البيئة (Environment Variables)

**مهم جداً!** اضغط على **"Environment Variables"** وأضف:

```
DATABASE_URL=سأعطيك إياه
JWT_SECRET=سأعطيك إياه
VITE_APP_TITLE=مركز الباندا للأزياء
```

(سأعطيك القيم الكاملة لاحقاً)

---

### الخطوة 5: النشر

1. اضغط **"Deploy"** 🚀
2. انتظر 2-5 دقائق
3. ستظهر رسالة **"Congratulations!"** 🎉
4. اضغط **"Visit"** لمشاهدة موقعك

✅ **موقعك الآن منشور على رابط مؤقت مثل:**
`https://panda-fashion-xxx.vercel.app`

---

## الجزء الثالث: ربط النطاق من Hostinger

### الخطوة 1: الحصول على معلومات DNS من Vercel

1. في مشروعك على Vercel، اذهب إلى **"Settings"**
2. اضغط على **"Domains"**
3. اكتب نطاقك: **alpanda.shop** (أو النطاق الذي اخترته)
4. اضغط **"Add"**
5. ستظهر لك معلومات DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
6. **احتفظ بهذه الصفحة مفتوحة**

---

### الخطوة 2: إعداد DNS في Hostinger

1. اذهب إلى: **https://hpanel.hostinger.com**
2. سجّل الدخول
3. اذهب إلى **"Domains"**
4. اضغط على نطاقك (alpanda.shop)
5. اضغط **"DNS / Name Servers"**
6. اضغط **"Manage"** أو **"DNS Zone Editor"**

---

### الخطوة 3: إضافة سجلات DNS

#### أ) إضافة سجل A:
1. اضغط **"Add Record"** أو **"+"**
2. اختر **Type: A**
3. املأ:
   - **Name:** `@` (أو اتركه فارغاً)
   - **Points to:** `76.76.21.21` (من Vercel)
   - **TTL:** 3600 (أو اتركه افتراضي)
4. اضغط **"Add Record"**

#### ب) إضافة سجل CNAME:
1. اضغط **"Add Record"** مرة أخرى
2. اختر **Type: CNAME**
3. املأ:
   - **Name:** `www`
   - **Points to:** `cname.vercel-dns.com` (من Vercel)
   - **TTL:** 3600
4. اضغط **"Add Record"**

#### ج) حذف السجلات القديمة (إذا وجدت):
- احذف أي سجلات A أو CNAME قديمة تشير إلى Hostinger
- احتفظ فقط بالسجلات الجديدة من Vercel

---

### الخطوة 4: التحقق من الربط

1. ارجع إلى Vercel
2. في صفحة Domains، اضغط **"Verify"** أو **"Refresh"**
3. انتظر 5-10 دقائق (قد يستغرق حتى 48 ساعة)
4. عندما يظهر ✅ بجانب النطاق، يكون الربط ناجحاً!

---

## الجزء الرابع: إعداد قاعدة البيانات

### الخيار 1: PlanetScale (موصى به)

1. اذهب إلى: **https://planetscale.com**
2. سجّل حساب مجاني
3. أنشئ قاعدة بيانات جديدة
4. احصل على **DATABASE_URL**
5. أضفها في Vercel Environment Variables

### الخيار 2: Supabase

1. اذهب إلى: **https://supabase.com**
2. سجّل حساب مجاني
3. أنشئ مشروع جديد
4. احصل على **DATABASE_URL**
5. أضفها في Vercel Environment Variables

**سأساعدك في هذه الخطوة بالتفصيل لاحقاً**

---

## ✅ النتيجة النهائية

بعد إكمال جميع الخطوات:

✅ موقعك منشور على: **https://alpanda.shop**
✅ لوحة التحكم تعمل: **https://alpanda.shop/admin/products**
✅ سرعة فائقة
✅ SSL تلقائي (https)
✅ استضافة مجانية
✅ نطاق احترافي

---

## 🆘 مشاكل شائعة وحلولها

### المشكلة 1: "Domain is not verified"
**الحل:**
- انتظر 10-30 دقيقة
- تحقق من سجلات DNS في Hostinger
- استخدم أداة: https://dnschecker.org

### المشكلة 2: "Build failed"
**الحل:**
- تحقق من Environment Variables
- تأكد من رفع جميع الملفات
- راجع سجل الأخطاء في Vercel

### المشكلة 3: "Database connection error"
**الحل:**
- تحقق من DATABASE_URL
- تأكد من إضافتها في Environment Variables
- أعد نشر المشروع

---

## 📞 الدعم

إذا واجهت أي مشكلة:
- تواصل معي مباشرة
- أو راجع وثائق Vercel: https://vercel.com/docs

---

## 🎯 الخطوات التالية

بعد نشر الموقع:
1. ✅ اختبر جميع الصفحات
2. ✅ جرّب لوحة التحكم
3. ✅ أضف منتجات حقيقية
4. ✅ شارك الموقع مع العملاء

---

**موفق! 🚀**

