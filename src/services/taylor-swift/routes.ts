import { Request, Response } from "express";
import { getByTitle as getTrackByTitle } from "../../controllers/trackController";
import { getByTitle as getAlbumByTitle } from "../../controllers/albumController";

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
    handler: getTrackByTitle,
  },
  {
    path: "/album/getByTitle",
    method: "get",
    handler: getAlbumByTitle,
  },
];
