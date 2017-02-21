const uuid = require('uuid')

module.exports = (mongoose,bcrypt) => {
  let userSchema = new mongoose.Schema({
    // Genaeral User Data
    name:                 String,
    email:                { type: String, required: true, unique: true},
    telephone:            Number,
    password:             { type: String, required: true},
    level:                { type: String, required: true},
    status:               { type: String, default: 'inactive'},
    checker:              String,
    // /Genaeral User Data
    state:                String,
    asesor:             {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    invesmentData:        {
      name:                 String,
      firstName :           String,
      lastName :            String,
      sex :                 String,
      nationality:          String,
      birthPlace:           String,
      idNumber:             Number,
      typeid:               String,
      curp:                 String,
      rfc:                  String,
      address:            {
        street:             String,
        suburb:             String,
        town:               String,
        city:               String,
        contry:             String,
        zipCode:            String,
      },
      maritalStatus:      String,
      regime:             String,
      spouse:             String,
      email:              String,
      telephone:          String,
      cellphone:           String,
      investmentForm:     {
        methodPayment:      String,
        anticipationForm:   String,
      },
      bankData:           {
        acoountNumber:        Number,
        standardizedBankKey:  Number,
        bank:                 String,
        acountHolder:         String,
      },
      beneficiaries:[     {
        name:               String,
        firstName:          String,
        lastName:           String,
        telephone:          Number,
        cellphone:           Number,
        percentage:         Number
      }],
      comments:           String
    }
  },{timestamps: true})

  userSchema.pre('save', function(next) {

    if (this.isModified('password') || this.isNew ) this.password = bcrypt.hashSync(this.password.trim(), 10)
    if (this.isModified('status') || this.isNew ) this.checker = (this.status == 'inactive') ? uuid.v4() : null

    return next()
  })

  userSchema.pre('findOneAndUpdate', function(next) {

    if (this._update.password) this._update.password = bcrypt.hashSync( this._update.password.trim(), 10)
    if (this._update.status) this._update.checker = (this._update.status == 'inactive') ? uuid.v4() : null

      return next()
  })

  userSchema.methods.comparePassword = function(pass, cb) {
    bcrypt.compare(pass,this.password, (err,isMatch) => {
      if (err) return cb(err)
      return cb(null,isMatch)
    })
  }

  return mongoose.model('User', userSchema)
}
