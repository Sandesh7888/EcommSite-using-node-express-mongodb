const mongoose =requrie('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const ownerSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  products: {
    type: Array,
    default: []
  },

  gstin: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
   
  }
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner