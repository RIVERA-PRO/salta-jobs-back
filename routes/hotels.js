import express from "express";
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'
import createHotel from '../controllers/hotels/create.js'
import updateHotel from '../controllers/hotels/update.js'
import destroyHotel from '../controllers/hotels/delete.js'
import oneHotel from '../controllers/hotels/get_one.js'
import allHotels from '../controllers/hotels/get_all.js'
import hotelsSchema from '../schemas/hotels.js'

let router = express.Router();
const { create } = createHotel
const { update } = updateHotel
const { destroy } = destroyHotel
const { getOne } = oneHotel
const { getAll } = allHotels

//create
router.post("/", passport.authenticate("jwt", { session: false }), validator(hotelsSchema), create)

//update
router.put("/:id", passport.authenticate("jwt", { session: false }), update)

//delete
router.delete("/:id", passport.authenticate("jwt", { session: false }), destroy)

//get one
router.get("/:id", passport.authenticate("jwt", { session: false }), getOne)

//get all
router.get("/", passport.authenticate("jwt", { session: false }), getAll)


export default router