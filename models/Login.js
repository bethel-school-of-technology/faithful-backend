// Require mongoose
var mongoose = require ('mongoose');

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

// Define schema
const Login = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: 1,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});



let SALT = 10;

Login.pre('save', function(next){
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }
    bcrypt.genSalt(SALT, function(err, salt){
      if (err) {
        return next(err);
      } 
        bcrypt.hash(user.password, salt , function(err, hash) {
          if(err) return next(err); 
            
            user.password = hash;
            next();
        })
      })
  });


Login.methods.comparePassword = function(candidatePassword, checkPassword) {
  
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) 
      return checkPassword(err);


      checkPassword(null, isMatch)
      
  })
}

// Compile model from schema
var LoginModel = mongoose.model('LoginModel', Login );

module.exports = LoginModel;