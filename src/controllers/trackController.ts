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

    const title = req.body.title;

    const track = await getConnection()
      .createQueryBuilder()
      .select("track")
      .from(Track, "track")
      .where("track.title = :title", { title: title })
      .getOne();

    res.send(track);
  } catch (err) {
    next(err);
  }
};
