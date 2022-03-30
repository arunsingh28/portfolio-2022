import mongoose from 'mongoose'

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
    }
})