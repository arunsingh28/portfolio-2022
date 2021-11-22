import { Express } from "express";
import messageController from "../Controllers/index";

export default function (router: Express) {
  router.get("/api/message/v1", messageController.Message);
}
