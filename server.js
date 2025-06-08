const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // 提供 public 資料夾的 HTML

// 註冊帳號
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) return res.status(400).json({ message: '帳號已存在' });

  await db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, role]);
  res.json({ message: '註冊成功' });
});

// 登入帳號
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password]
  );
  if (rows.length === 0) {
    return res.status(401).json({ message: '登入失敗' });
  }
  // rows[0] 這裡必須包含 role！
  res.json({ message: '登入成功', user: rows[0] });
});

// 新增交易
app.post('/api/transaction', async (req, res) => {
  const { username, merchant, merchantAccount, amount, time, method } = req.body;
  await db.query(
    'INSERT INTO transactions (username, merchant, merchantAccount, amount, time, method) VALUES (?, ?, ?, ?, ?, ?)',
    [username, merchant, merchantAccount, amount, time, method]
  );
  res.json({ message: '交易完成' });
});

// 查詢交易
app.get('/api/transactions', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM transactions');
  res.json(rows);
});


const port = 3000;
app.listen(port, () => {
  console.log(`✅ 伺服器啟動成功！請前往 http://localhost:${port}`);
});
