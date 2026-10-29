const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// تفعيل CORS عشان الفرونت يقدر يتصل
app.use(cors());
app.use(express.json());

// بيانات تجريبية (مؤقتاً)
let purchases = [];
let suppliers = [];

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.json({ 
    message: 'سيرفر شركة الدلتا للسكر شغال بنجاح',
    status: 'online'
  });
});

// جلب كل المشتريات
app.get('/api/purchases', (req, res) => {
  res.json(purchases);
});

// إضافة عملية شراء
app.post('/api/purchases', (req, res) => {
  const newPurchase = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  purchases.push(newPurchase);
  res.status(201).json(newPurchase);
});

// جلب الموردين
app.get('/api/suppliers', (req, res) => {
  res.json(suppliers);
});

// إضافة مورد
app.post('/api/suppliers', (req, res) => {
  const newSupplier = {
    id: Date.now(),
    ...req.body
  };
  suppliers.push(newSupplier);
  res.status(201).json(newSupplier);
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`السيرفر شغال على البورت ${PORT}`);
});