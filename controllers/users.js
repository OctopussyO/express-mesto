const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch(() => {
      res.status(404).send({ message: 'Нет такого файла' });
    });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
