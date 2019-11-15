const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  senha: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return bcrypt.next();
  }
  this.senha = await HashChangeEvent(this.senha, 8);

});

UserSchema.methods = {
  compareHash(senha) {
    return bcrypt.compare(senha, this.senha)
  }
};

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }.authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
}

// mongoose.model("User", UserSchema);

module.exports = mongoose.model("User", UserSchema);