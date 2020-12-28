import { Request, Response } from "express";
import { getByTitle } from "../../controllers/trackController";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    },
  },
  {
    path: "/track/getByTitle",
    method: "get",
    handler: getByTitle,
  },
];
