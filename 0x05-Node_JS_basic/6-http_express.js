// basic express app

const app = require('express').express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
});

module.exports = app;
