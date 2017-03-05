// Modelado de datos para manejar los Usuarios
// se exporta como un modelo de mongoose User, con esto podremos hacer un CRUD a los datos de los usuarios.
const uuid = require('uuid')

module.exports = (mongoose,bcrypt) => {
  let userSchema = new mongoose.Schema({
    // Genaeral User Data
    name:                 String,
    email:                { type: String, required: true, unique: true},
    telephone:            Number,
    password:             { type: String, required: false},
    level:                { type: String, required: false, default: 'user'},
    status:               { type: String, default: 'inactive'},
    checker:              String,
    facebook:             { type: String, unique: true},
    // /Genaeral User Data
    contactFrom:          String,
    state:                String,
    asesor:             {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    invesmentData:        {
      name:                 {type: String, default: ''},
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
        country:             String,
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
      beneficiary1:{
        name:               String,
        firstName:          String,
        lastName:           String,
        telephone:          Number,
        cellphone:           Number,
        percentage:         Number
      },
      beneficiary2:{
        name:               String,
        firstName:          String,
        lastName:           String,
        telephone:          Number,
        cellphone:           Number,
        percentage:         Number
      },
      comments:           String
    }
  },{timestamps: true})
// Middleware que se ejecuta antes de guardar un documento (user.save())
  userSchema.pre('save', function(next) {

    // encripta la password entes de guardarla en la base de datos.
    if (this.isNew && this.password ) this.password = bcrypt.hashSync(this.password.trim(), 10)
    // Crea o elimina el token UUIDv4 para la activacion de la cuenta de usuario.
    if (this.isModified('status') || this.isNew ) this.checker = (this.status == 'inactive') ? uuid.v4() : null

    return next()
  })

// Middleware que se ejecuta antes de ejecutar la funcion  findOneAndUpdate
  userSchema.pre('findOneAndUpdate', function(next) {

    // encripta la password entes de guardarla en la base de datos.
    if (this._update.password) this._update.password = bcrypt.hashSync( this._update.password.trim(), 10)
    // Crea o elimina el token UUIDv4 para la activacion de la cuenta de usuario.
    if (this._update.status) this._update.checker = (this._update.status == 'inactive') ? uuid.v4() : null

      return next()
  })

// metodo para compara password 
  userSchema.methods.comparePassword = function(pass, cb) {
    bcrypt.compare(pass,this.password, (err,isMatch) => {
      if (err) return cb(err)
      return cb(null,isMatch)
    })
  }

  return mongoose.model('User', userSchema)
}
