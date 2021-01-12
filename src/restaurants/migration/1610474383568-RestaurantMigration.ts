import { MigrationInterface, QueryRunner } from 'typeorm';

export class RestaurantMigration1610474383568 implements MigrationInterface {
  name = 'RestaurantMigration1610474383568';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "restaurant" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying(255) NOT NULL,
        "address" character varying(255) NOT NULL,
        "user_id" uuid,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "restaurant"
    `);
  }
}
