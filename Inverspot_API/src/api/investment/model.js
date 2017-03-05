// Modelado de datos para manejar las Inversiones
// se exporta como un modelo de mongoose Investment, con esto podremos hacer un CRUD a los datos de las inversiones.
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
