import { Request, Response } from "express";
import MessageModel from "../Models/Message.model";

const Message = async (req: Request, res: Response) => {
    const {message,email,name} = req.body;
    try {
        if(!message || message === null || message === undefined){
            return res.status(401).json({
                message: 'Message is required'
            })
        }
        if(!message || !email || !name || message === '' || email === '' || name === '' || message === undefined || email === undefined || name === undefined || name === null || email === null || message === null){
            return res.status(401).json({
                message: 'Please provide valid information'
            })
        } else {
            const newMessage = await new MessageModel({ message, email,name,  })
        }
    } catch (error) {
        return res.status(500).json({message: 'Server error please try again', error: error.message})
    }
};

export default { Message };
