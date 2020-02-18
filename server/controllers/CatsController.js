import express from "express"

let _FAKEDB = [
  { id: 0, name: "rocket", hair: "dark", legs: 4 },
  { id: 1, name: "kitty", hair: "white", legs: 3 },
  { id: 2, name: "cat", hair: "orange", legs: 4 }
]
let count = 3
export default class CatsController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
  }
  getAll(req, res, next) {
    res.send(_FAKEDB)
  }
  getById(req, res, next) {
    let found = _FAKEDB.find(cat => cat.id == req.params.id)
    if (!found) {
      return res.status(400).send("cat not found")
    }
    return res.send(found)
  }
}
