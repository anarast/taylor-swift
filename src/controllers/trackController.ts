import { NextFunction, Request, Response } from "express";
import { getConnection } from "typeorm";
import { Track } from "../entities/track";
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

    const track = await getConnection()
      .createQueryBuilder()
      .select("track")
      .from(Track, "track")
      .where("LOWER(track.title) = LOWER(:title)", { title: title })
      .getOne();

    if (!track) {
      throw new HTTP400Error("Track with provided title not found.");
    } else {
      res.send(track);
    }
  } catch (err) {
    next(err);
  }
};
