import express from "express";
import destinos from "../controllers/destinos/create.js";
import oneDest from '../controllers/destinos/get_one.js'
import destroyD from "../controllers/destinos/destroy.js";
import updateD from '../controllers/destinos/update.js'
import todos from '../controllers/destinos/get_destino.js'
import finds_id from "../middlewares/auth/finds_id.js";
import exist_destino from '../middlewares/destinos/exist_destino.js'
import passport from '../middlewares/passport.js'
import is_property_of_ from "../middlewares/sellers/is_property_of.js";
import is_active from "../middlewares/sellers/is_active.js";
import destinoSchemas from '../schemas/destino.js'
import validator from '../middlewares/validator.js'
import controllerCategory from '../controllers/category/category.js'

let router = express.Router()
const { create } = destinos
const { getOne } = oneDest
const { destroy } = destroyD
const { update } = updateD
const { read } = todos
const { show } = controllerCategory

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), exist_destino, create)

router.get('/categories', show)
router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), is_property_of_, update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), is_property_of_, finds_id, is_active, destroy)

export default router
