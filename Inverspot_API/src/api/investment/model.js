module.exports = (mongoose) => {

  let investmentSchema = new mongoose.Schema({
    sharesNumber:   Number,
    status:         String,
    userId:         {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    propertyId:     {type:mongoose.Schema.Types.ObjectId, ref: 'Property'}
  },{timestamps:true})

  return mongoose.model('Investment', investmentSchema)
}
