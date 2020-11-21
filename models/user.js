const mongoose = require('mongoose');

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9&\-[\]@:;!$'%_+*,._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()&\-[\]@:;!$'%_+*,.~#?&//=]*)/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => urlRegex.test(v),
      message: 'Ссылка на изображение введена некорректно.',
    },
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
