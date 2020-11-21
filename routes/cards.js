const router = require('express').Router();
const { getCards, getCard, createCard } = require('../controllers/cards');

router.get('/cards', getCards);

router.get('/cards/:id', getCard);

router.post('/cards', createCard);

module.exports = router;
