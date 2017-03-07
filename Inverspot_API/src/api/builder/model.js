// Modelado de datos para manejar las constructoras
// se exporta como un modelo de mongoose Builder, con esto podremos hacer un CRUD a los datos de las constructoras.
module.exports = (mongoose) => {

  let builderSchema = new mongoose.Schema({
    name:           String,
    yearsWork:      Number,
    completedWorks: Number,
    website:        String
  },{timestamps:true})

  return mongoose.model('Builder', builderSchema)
}
