/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.alterColumn("tracks", "lyrics", {
    notNull: false,
  });
  pgm.alterColumn("tracks", "length", {
    notNull: false,
  });
  pgm.alterColumn("tracks", "album_id", {
    notNull: false,
  });
};
