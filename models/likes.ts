import mongoose from 'mongoose'

const { Schema } = mongoose

const likesSchema = new Schema({

    postId: {
        type: String,
        required: true,
        unique: true
    },

    count: {
        type: Number,
        default: 0
    }

  },{timestamps:true})

  export default mongoose.models.likes || mongoose.model('likes', likesSchema)