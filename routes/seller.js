import express from "express";
import newSeller from "../controllers/seller/newSeller.js";
import validator from "../middlewares/validator.js";
import passport from '../middlewares/passport.js';
import schemaSeller from '../schemas/seller.js'
import alreadyExists from "../middlewares/sellers/alreadyExists.js";
import getOne from '../controllers/seller/get_one.js'


let router = express.Router()
const { create } = newSeller
const { get_one } = getOne

router.post('/', passport.authenticate("jwt", { session: false }), validator(schemaSeller), alreadyExists, create)

router.get('/:id', get_one)

export default router