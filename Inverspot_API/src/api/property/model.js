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

  function updateStatus(resProperty) {
    if (resProperty.dataSheet.sharesSold >= resProperty.dataSheet.totalShares) {
      resProperty.status = 'fund'
    } else {
      resProperty.status = 'available'
    }
    resProperty.save()
  }

  propertySchema.post('save', updateStatus)

  propertySchema.post('findOneAndUpdate', updateStatus)

  return mongoose.model('Property', propertySchema)
}
