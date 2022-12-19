const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;
const cors= require("cors")

// Bind the router db to the app
server.db = router.db;
server.use(middlewares);
server.use(cors())
server.use(router);

server.listen(port);
