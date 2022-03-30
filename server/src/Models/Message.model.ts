import mongoose,{ ObjectId } from 'mongoose'

export interface ImessageSchema{
    id: ObjectId
    email : string
    message: string
    createdAt: string
    name: string
}

const messageSchema = new mongoose.Schema({
    email:{
        type: String,
        validate: {
            validator: function(email){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'Please provide valid email'
        },
        required: [true, 'Email required']
    },
    message:{
        type: String,
        required: [true, 'Message required']
    },
    createdAt: {
        type : String,
        default : Date
    },
    name: {
        type: String,
        required: [true, 'Name required']
    },
})

export default mongoose.model<ImessageSchema>('Message',messageSchema)