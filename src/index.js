const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    service: 'scaffolder-demo',
    version: process.env.VERSION || '0.0.1',
    status: 'healthy'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`scaffolder-demo listening on port ${PORT}`);
});
