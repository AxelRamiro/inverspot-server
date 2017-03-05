// Modelado de datos para manejar los avance de obra
// se exporta como un modelo de mongoose WorkProgress, con esto podremos hacer un CRUD a los datos del avance de obras.
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
