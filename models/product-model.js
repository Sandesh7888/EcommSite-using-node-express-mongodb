const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const productSchema = new mongoose.Schema({
    image: String,
  name: String,
  price: Number,
  discount:{
    type: Number,
    default: 0
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product