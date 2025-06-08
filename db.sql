CREATE DATABASE IF NOT EXISTS mobile_payment;
USE mobile_payment;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),         -- 消費者帳號
  merchant VARCHAR(50),         -- 商家顯示名稱（如 阿明早餐店）
  merchantAccount VARCHAR(50),  -- 商家帳號（如 store1，for 精準比對）
  amount DECIMAL(10,2),
  time VARCHAR(50),
  method VARCHAR(50)
);
ALTER TABLE users ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'user';
SELECT username, role FROM users;
UPDATE users SET role = 'merchant' WHERE username = 'store1';

USE mobile_payment;
-- 允許非條件刪除
SET SQL_SAFE_UPDATES = 0;
-- 清空所有帳號（使用者與商家）
DELETE FROM users;
SET SQL_SAFE_UPDATES = 1;
SELECT * FROM users;

-- 清空交易紀錄（可選）
DELETE FROM transactions;

-- 恢復安全限制
SET SQL_SAFE_UPDATES = 1;

-- 確認刪除結果
SELECT * FROM transactions;



