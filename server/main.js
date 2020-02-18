import express from "express";
import bp from "body-parser"
import CatsController from "./controllers/CatsController";
import DogsController from "./controllers/DogsController";


let server = express()

const port = 3000
server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

server.use("/api/cats", new CatsController().router)
server.use("/api/dogs", new DogsController().router)


server.listen(port, () => console.log(`running on port ${port}`))