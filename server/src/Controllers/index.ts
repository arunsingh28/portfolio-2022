import { Request, Response } from "express";

const Message = async (req: Request, res: Response) => {
  console.log("Message");
};

export default { Message };
