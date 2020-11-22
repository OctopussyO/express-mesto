const router = require('express').Router();
const {
  getCards,
  getCard,
  createCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getCards);

router.get('/cards/:id', getCard);

router.post('/cards', createCard);

router.put('/cards/:id/likes', likeCard);

router.delete('/cards/:id/likes', dislikeCard);

module.exports = router;
