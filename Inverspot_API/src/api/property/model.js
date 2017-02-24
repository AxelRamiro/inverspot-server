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


  // propertySchema.pre('save', function(resProperty) {
  //   console.log(this);
  //   let sharesSold = this.dataSheet.sharesSold
  //   let totalShares = this.dataSheet.totalShares
  //   let status = this.status
  //
  //   if (sharesSold >= totalShares && status != 'fund') {
  //     this.status = 'fund'
  //     console.log('-------fund');
  //   } else if (sharesSold < totalShares && status != 'available') {
  //     this.status = 'available'
  //     console.log('-------available');
  //   }
  // })
  //
  // propertySchema.post('findOneAndUpdate', function(resProperty) {
  //   console.log('------------------------');
  //   console.log(resProperty);
  //   if (this._update['$inc']) {
  //     let sharesSum = this._update['$inc']['dataSheet.sharesSold']
  //     let sharesSold = resProperty.dataSheet.sharesSold + sharesSum
  //     let totalShares = resProperty.dataSheet.totalShares
  //     let status = resProperty.status
  //
  //     if (sharesSold >= totalShares && status != 'fund') {
  //       resProperty.status = 'fund'
  //       resProperty.save()
  //     } else if (sharesSold < totalShares && status != 'available') {
  //       resProperty.status = 'available'
  //       this.update({_id: resProperty._id}, {$set: {status: 'cambio'}}).exec()
  //     }
  //   }
  // })

  return mongoose.model('Property', propertySchema)
}
