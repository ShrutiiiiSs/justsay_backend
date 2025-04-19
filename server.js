// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect DB
// connectDB();

// // Routes
// app.use('/api/foods', require('./routes/foodRoutes'));

// // Serve static frontend
// app.use(express.static(path.join(__dirname, '..', 'frontend')));

// // Serve home.html fallback
// app.get('*', (req, res) => {
//   const filePath = path.resolve(__dirname, '..', 'frontend', 'home.html');
//   console.log('Serving:', filePath);
//   res.sendFile(filePath);
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello Shivom');
// });

// // 👇 Add this back and test again
// app.use('/api/foods', require('./routes/foodRoutes'));

// app.use('/api/assistant', require('./routes/assistantRoutes'));

// // Don't add frontend/static logic yet

// app.listen(5000, () => console.log('Server running'));
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
connectDB();

// ✅ Routes
app.use('/api/foods', require('./routes/foodRoutes'));
app.use('/api/assistant', require('./routes/assistantRoutes'));

// ✅ Serve static frontend files (like home.html, script.js)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ✅ Serve home.html as fallback
app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'frontend', 'home.html');
  console.log('Serving:', filePath);
  res.sendFile(filePath);

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
