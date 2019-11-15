const User = require("../models/User");

// const express = require("express");

// const router = express.Router();

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }

    if (!(await user.compareHash(senha))) {
      return res.status(400).json({ error: "Invalid password." });
    }
    return res.json({ user, token: User.genereateToken(user) });

  }
};
























// router.post("register", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.send({ user });
//   } catch (err) {
//     return res.status(400).send({ error: "Regitration failed" });
//   }
// });






// module.exports = app => app.use("/auth", router);













