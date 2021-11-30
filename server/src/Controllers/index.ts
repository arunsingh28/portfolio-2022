import { Request, Response } from "express";

const Message = async (req: Request, res: Response) => {
    return res.send(req)
};

export default { Message };
