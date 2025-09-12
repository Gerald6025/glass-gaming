import mongoose from 'mongoose'


const { Schema } = mongoose

const commentSchema = new Schema({

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

 export default mongoose.models.comment || mongoose.model('comment', commentSchema)