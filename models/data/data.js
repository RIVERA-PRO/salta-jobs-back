import 'dotenv/config.js'
import '../../config/database.js'
import {users} from './users.js'
import sellers from './sellers.js'
import {categories} from './categories.js'
import {destinos} from './destinos.js'
import User from '../User.js'
import Seller from '../Seller.js'
import Category from '../Category.js'
import Destino from '../Destino.js'
import Detail from '../Detail.js'

let newCategories = async(categories) => await Category.insertMany(categories)

let newUsers = async(users) => await User.insertMany(users)

let newRoles = async(rol1) => {
    for (let seller of rol1) {
        let user = await User.findOne({ mail: seller.user_id })
        seller.user_id = user._id
        await Seller.create(seller)
    }
}

let newDestino = async(destinos) => {
    for (let destino of destinos) {
        let category = await Category.findOne({ name: destino.category_id })
        let seller = await Seller.findOne({ name: destino.seller_id })
        destino.category_id = category._id
        destino.seller_id = seller._id
        let newDestino = await Destino.create(destino)
        // for (let detail of destino.detail) {
        //     detail.destino_id = newDestino._id
        //     detail.cover_photo = detail.pages[0]
        //     await Detail.create(detail)
        // }
    }
}

let data = async () => {
    await newCategories(categories)
    await newUsers(users)
    await newRoles(sellers)
    await newDestino(destinos)
    console.log('done!')
}

data()
