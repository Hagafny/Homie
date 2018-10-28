const path = require('path');
const express = require('express');
const api = require('./routes');

const app = express();
const cacheTime = 86400000 * 7; // 7 days

// setup the app middlware
require('./middleware/appMiddleware')(app);

app.use(express.static(path.join(__dirname, '../dist'), { maxAge: cacheTime }));

// setup the api
app.use('/api/', api);

// BrowserHistory code - We need this so react router could work.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.use((err, req, res) => {
  // if error thrown from jwt validation check <- In the future
  // if (err.name === 'UnauthorizedError') {
  //   res.status(401).send('Invalid token');
  //   return;
  // }

  res.status(500).send('Error');
});

module.exports = app;

(func