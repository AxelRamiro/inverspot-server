module.exports = (mongoose) => {

  let builderSchema = new mongoose.Schema({
    name:           String,
    yearsWork:      Number,
    completedWorks: Number,
    website:        String
  },{timestamps:true})

  return mongoose.model('Builder', builderSchema)
}
