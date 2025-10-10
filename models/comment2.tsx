import mongoose from 'mongoose'


const { Schema } = mongoose

const comment2Schema = new Schema({

    postId: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }

  },{timestamps:true})

 export default mongoose.models.Comment2 || mongoose.model('Comment2', comment2Schema)