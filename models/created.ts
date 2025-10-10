import mongoose from 'mongoose'


const { Schema } = mongoose

const createdSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true,

    },

    author:{
        type: String,
        required: true
    }

  },{timestamps:true})

 export default mongoose.models.created || mongoose.model('created', createdSchema)