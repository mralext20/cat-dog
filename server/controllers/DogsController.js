import express from "express"

let _FAKEDB = [
  { id: 0, name: "sonny", hair: "dark", legs: 4 },
  { id: 1, name: "shadow", hair: "white", legs: 3 },
  { id: 2, name: "dog", hair: "græy", legs: 4 }
]
let count = 3
export default class DogsController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
  }
  getAll(req, res, next) {
    res.send(_FAKEDB)
  }
  getById(req, res, next) {
    let found = _FAKEDB.find(dog => dog.id == req.params.id)
    if (!found) {
      return res.status(400).send("Dog not found")
    }
    return res.send(found)
  }
}
