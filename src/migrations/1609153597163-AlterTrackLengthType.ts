import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTrackLengthType1609152843288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tracks" drop COLUMN length`);
    await queryRunner.query(`ALTER TABLE "tracks" ADD COLUMN length smallint`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tracks" add COLUMN length time`);
  }
}
