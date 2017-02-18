module.exports = (mongoose) => {
  let propertySchema = new mongoose.Schema({
    // Basic Information
    title:                String,
    description:          String,
    image:                String,
    address:              {
      street:               String,
      number:               String,
      suburb:               String,
      city:                 String,
      zipCode:              Number,
      coordinates:          String
    },
    // /Basic Information
    dataSheet:             {
      investAmount:        Number,
      estimatedTerm:       Number,
      totalShares:         Number,
      sharesSold:          Number
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
      objectiveFundraising:   String,
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
