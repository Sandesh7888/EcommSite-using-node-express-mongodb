const mongoose =requrie('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: []
  },
  isadmin: Boolean,
  order: {
    type: Array,
    default: []
  },
  contact: Number,
  picture: String
})

const User = mongoose.model('User', userSchema)

module.exports = User