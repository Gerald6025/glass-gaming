import mongoose from 'mongoose'


const { Schema } = mongoose

const playstationSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,

    },

    imageurl:{
        type: String,
        required: true
    }

 },{timestamps:true})

 export default mongoose.models.playstation || mongoose.model('playstation', playstationSchema)