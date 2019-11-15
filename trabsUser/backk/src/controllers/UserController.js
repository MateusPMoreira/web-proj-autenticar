const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  },

  async show(req, res) {
    const userr = await User.findById(req.params.id)

    return res.json(userr);
  },


  // async update(req, res) {
  //   const userrr = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

  //   return res.json(userrr);
  // }

  async destroy(req, res) {
    await User.findByIdAndRemove(req.params.id);

    return res.send("apagou");
  }

};
