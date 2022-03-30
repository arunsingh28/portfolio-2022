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
            try {
                const newMessage = new MessageModel({ message, email,name})
                await newMessage.save()
                return res.status(200).json({message: 'Message sent successfully'})
            } catch (error) {
                return res.status(500).json({message: 'Something went wrong please try again after sometime', error: error.message})
            }
        }
    } catch (error) {
        return res.status(500).json({message: 'Server error please try again', error: error.message})
    }
};

export default { Message };
