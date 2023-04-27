import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';
import seller from './seller.js'
import consulta from './consultas.js'
import compras from './compras.js'
import hotels from './hotels.js'
import rooms from './rooms.js'

import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/destinos', destino)
router.use('/details', detail)
router.use('/seller', seller)
router.use('/consulta', consulta)
router.use('/buy', compras)
router.use('/stay', hotels)
router.use('/rooms', rooms)

export default router