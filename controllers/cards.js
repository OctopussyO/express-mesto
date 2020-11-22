const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find()
    .then((data) => res.send(data))
    .catch(() => {
      res.status(404).send({ message: 'Нет такого файла' });
    });
};

module.exports.getCard = (req, res) => {
  const { id } = req.params;
  Card.findById(id)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      res.send(card);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports.createCard = (req, res) => {
  Card.create({ owner: req.user, ...req.body })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(400).send(err));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(400).send(err));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(400).send(err));
};
