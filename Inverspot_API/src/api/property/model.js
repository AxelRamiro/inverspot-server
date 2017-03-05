// Modelado de datos para manejar las Propiedades
// se exporta como un modelo de mongoose Property, con esto podremos hacer un CRUD a los datos de las propiedades.
module.exports = (mongoose) => {
  let propertySchema = new mongoose.Schema({
    // Basic Information
    title:                String,
    description:          String,
    image:                String,
    address:              {
      street:               String,
      number:               Number,
      suburb:               String,
      city:                 String,
      zipCode:              Number,
      coordinates:          String
    },
    builder:             {type:mongoose.Schema.Types.ObjectId, ref: 'Builder'},
    status:                { type: String, default: 'available'},
    // /Basic Information
    dataSheet:             {
      investAmount:        Number,
      estimatedTerm:       Number,
      totalShares:         {type: Number, default: 0},
      sharesSold:          {type: Number, default: 0}
    },
    marketResearch:        {
      totalCost:            Number,
      salePrice:            Number,
      salesCommission:      Number,
      utility:              Number,
      estimatedTime:        Number,
      yieldInTime:          Number,
      annualYield:          Number
    },
    fixedData:              {
      objectiveFundraising:   Number,
      expectedAnnualYield:    Number,
      expectedUtility:        Number
    },
    capitalOutflow:         {
      totalCost:              Number,
      salePrice:              Number,
      salesCommission:        Number,
      utility:                Number,
      estimatedTime:          Number,
      yieldIn18Months:        Number,
      annualYield:            Number
    },
    supplementaryData:        []
  },{timestamps:                true})

  return mongoose.model('Property', propertySchema)
}
