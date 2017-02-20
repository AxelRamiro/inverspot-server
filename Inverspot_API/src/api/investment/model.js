module.exports = (mongoose) => {

  let investmentSchema = new mongoose.Schema({
    sharesNumber:   { type: Number, required: true},
    amount:         { type: Number, required: true},
    status:         String,
    investor:         {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    property:     {type:mongoose.Schema.Types.ObjectId, ref: 'Property', required: true}
  },{timestamps:true})

  return mongoose.model('Investment', investmentSchema)
}
