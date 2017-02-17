module.exports = (mongoose) => {
  userSchema = new mongoose.Schema({
    // Genaeral User Data
    name:           String,
    email:          { type: String, required: true},
    telephone:      Number,
    password:       { type: String, required: true},
    level:          { type: String, required: true},
    status:         { type: String, default: 'inactive'},
    // /Genaeral User Data
    state:          String,
    asesorId:       {type:mongoose.Schema.Types.ObjectId, ref: 'user'},
    invesmentData:  {
      name:           String,
      firstName :     String,
      lastName :      String,
      sex :           String,
      nationality:    String,
      birthPlace:     String,
      idNumber:       Number,
      typeid:         String,
      curp:           String,
      rfc:            String,
      address: {
        street:       String,
        suburb:       String,
        town:         String,
        city:         String,
        contry:       String,
        zipCode:      String,
      },
      maritalStatus:  String,
      regime:         String,
      spouse:        String,
      email:         String,
      telephone:      String,
      celphone:      String,
      investmentForm: {
        methodPayment: String,
        anticipationForm:String,
      },
      bankData: {
        acoountNumber: Number,
        standardizedBankKey: Number,
        bank: String,
        accountHolder: String,
      },
      beneficiaries:[{
        name: String,
        firstName: String,
        lastName: String,
        telephone: Number,
        celphone: Number,
        percentage: Number
      }],
      comments: String
    }
    //...
  })
  return mongoose.model('User', userSchema)
}
