import { Request, Response } from "express";

const Message = async (req: Request, res: Response) => {
  res.sendStatus(200);
};

export default { Message };
