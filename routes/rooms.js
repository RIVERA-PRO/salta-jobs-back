import express from "express"
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'
import createRoom from '../controllers/rooms/create.js'
import destroyRoom from '../controllers/rooms/delete.js'
import allRooms from '../controllers/rooms/get_all.js'
import oneRoom from '../controllers/rooms/get_one.js'
import updateRoom from '../controllers/rooms/update.js'
import RoomSchema from '../schemas/rooms.js'

let router = express.Router()
const { create } = createRoom
const { update } = updateRoom
const { destroy } = destroyRoom
const { getAll } = allRooms
const { getOne } = oneRoom


//create
router.post("/:hotelid", passport.authenticate("jwt", { session: false }), validator(RoomSchema), create)

//update
router.put("/:id", passport.authenticate("jwt", { session: false }), update)

//delete
router.delete("/:id", destroy)

//get one
router.get("/:id", passport.authenticate("jwt", { session: false }), getOne)

//get All
router.get("/", passport.authenticate("jwt", { session: false }), getAll)

export default router
