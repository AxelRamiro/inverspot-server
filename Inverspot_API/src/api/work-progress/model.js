module.exports = (mongoose) => {

  let workProgressSchema = new mongoose.Schema({
    year: Number,
    month: String,
    description: String,
    photo: String,
    property:     {type:mongoose.Schema.Types.ObjectId, ref: 'Property'}
  },{timestamps:true})

  return mongoose.model('WorkProgress', workProgressSchema)
}
