/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("albums", {
    id: "id",
    title: { type: "varchar(20)", notNull: true },
    release_date: {
      type: "date",
      notNull: true,
    },
    label: { type: "varchar(100)", notNull: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createTable("tracks", {
    id: "id",
    title: { type: "varchar(100)", notNull: true },
    lyrics: {
      type: "text",
      notNull: true,
    },
    length: { type: "time", notNull: true },
    album_id: {
      type: "integer",
      notNull: true,
      references: '"albums"',
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};
