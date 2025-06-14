
# 📱 行動支付系統（Mobile Payment System）

這是一個模擬行動支付流程的網站系統，支援使用者註冊、付款、商家收款通知、交易紀錄查詢與圖表顯示。

> 技術架構：HTML/CSS/JavaScript + Node.js + MySQL

---

## 🔧 功能特色

- 👤 使用者/商家註冊與登入（角色選擇）
- 💸 使用者選擇商家付款
- 🧾 收據頁顯示交易資訊
- 🏪 商家即時接收屬於自己的交易紀錄
- 📒 所有交易紀錄查詢
- 📊 繪製交易統計圖表

---

## 📁 專案目錄結構

```
project/
├── public/                  # 前端頁面
│   ├── 行動支付系統.html         # 登入頁
│   ├── register.html         # 註冊頁
│   ├── bind.html             # 綁定角色頁
│   ├── select_merchant.html  # 選擇商家
│   ├── input_amount.html     # 輸入金額
│   ├── pay.html              # 確認付款
│   ├── receipt.html          # 顯示付款收據
│   ├── merchant.html         # 商家收款頁
│   ├── records.html          # 所有交易紀錄
│   ├── chart.html            # 圖表頁
│   └── images.png            # 介面插圖
├── server.js                # Node.js 後端主程式
├── db.js                    # MySQL 連線設定
└── README.md                # 專案說明文件（本檔案）
```

---

## 🛠️ 安裝與執行方式

### 1️⃣ 安裝套件

```bash
npm install express mysql2 cors
```

### 2️⃣ 建立資料庫

打開 MySQL 並執行以下語法：

```sql
CREATE DATABASE IF NOT EXISTS mobile_payment;
USE mobile_payment;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  merchant VARCHAR(50),
  merchantAccount VARCHAR(50),
  amount DECIMAL(10,2),
  time VARCHAR(50),
  method VARCHAR(50)
);
```

---

### 3️⃣ 啟動伺服器

```bash
node server.js
```

啟動後開啟瀏覽器輸入：

```
http://localhost:3000/行動支付系統.html
```

---

## 🧪 測試帳號（可自建）

| 帳號   | 密碼   | 角色       |
|--------|--------|------------|
| store1 | 1234   | 商家       |
| user1  | 1234   | 使用者     |

---

## 📌 注意事項

- 請將所有 HTML 放入 `public/` 資料夾
- 登入資訊與角色會記錄在 `localStorage`
- 商家比對是根據 `merchantAccount === loginUser.username`

---

## 📄 作者與授權

本專案僅供學習與課堂展示用途  
作者：Yu Lang Chou  
年份：2025
