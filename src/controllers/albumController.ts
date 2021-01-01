import { Request, Response, NextFunction } from "express";
import { getConnection } from "typeorm";
import { Album } from "../entities/album";
import { HTTP400Error } from "../utils/httpErrors";

export const getByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body || !req.body.title) {
      throw new HTTP400Error("Title is required.");
    }

    // Lowercase and strip non-alphanumeric characters
    const title = req.body.title.toLowerCase().replace(/\W/g, "");

    const album = await getConnection()
      .createQueryBuilder()
      .select("album")
      .from(Album, "album")
      .where("LOWER(album.title) = LOWER(:title)", { title: title })
      .getOne();

    if (!album) {
      throw new HTTP400Error("Album with provided title not found.");
    } else {
      res.send(album);
    }
  } catch (err) {
    next(err);
  }
};
