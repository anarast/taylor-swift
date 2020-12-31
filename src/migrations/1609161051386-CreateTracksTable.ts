import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTracksTable1609161051386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tracks",
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "lyrics",
            type: "text",
          },
          {
            name: "length",
            type: "smallint",
          },
          {
            name: "album_id",
            type: "smallint",
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
      "tracks",
      new TableForeignKey({
        columnNames: ["album_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "albums",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
