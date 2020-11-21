const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  // Объект опций. Эти свойства прописываем, чтобы избежать проблем совместимости с MongoDB
  // в будущем, т.к. сейчас (2020) логику взаимодействия Mongoose с MongoDB переписывают.
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
