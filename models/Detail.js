import mongoose from 'mongoose'

let schema = new mongoose.Schema(

    {
        destino_id:{ type:mongoose.Types.ObjectId, ref:'destinos', required:true },
        title: { type:String, required:true },
        pages: { type:Array, required:true },
        price: { type:Number }        
    },{
        timestamps: true
    }
)

let Detail = mongoose.model('details', schema)
export default Detail

