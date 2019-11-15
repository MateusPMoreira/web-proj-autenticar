const {Router} = require("express");


const UserController = require("./controllers/UserController");
// const AuthController = require("./controllers/AuthController");

const authMiddleware = require("./middlewares/auth");

const routes = Router();

// routes.get("/userr/:id", UserController.show);

routes.get("/users:id", UserController.index);
// routes.post()
routes.post("/users", UserController.store);

// routes.put("/userrr/:id", UserController.update)

routes.use(authMiddleware);
routes.delete("/userrr/:id", UserController.destroy);
routes.get("/teste", (req, res) => res.json({ ok: true }));

module.exports = routes;