import { Request, Response } from "express";

const Message = async (req: Request, res: Response) => {
    return res.status(200)
};

export default { Message };
