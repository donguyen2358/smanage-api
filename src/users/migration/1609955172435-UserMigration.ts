import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1609955172435 implements MigrationInterface {
  name = 'UserMigration1609955172435';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mst_user" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying(255) NOT NULL, 
        "username" character varying(20) NOT NULL,
        "is_active" boolean NOT NULL DEFAULT true,
        "coin" integer NOT NULL, 
        "email" character varying(255) NOT NULL,
        "password" character varying(6) NOT NULL, 
        "phone" character varying(12) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP, 
        CONSTRAINT "PK_489dd7b3d3f0b3a54618b2bf26b" PRIMARY KEY ("id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "mst_user"`);
  }
}
