import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddForeignKeyToRestaurantMigration1610474788420
  implements MigrationInterface {
  name = 'AddForeignKeyToRestaurantMigration1610474788420';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "restaurant"
      ADD CONSTRAINT "FK_aefad5ba2f054d4bbc415b3ef2a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "restaurant" DROP CONSTRAINT "FK_aefad5ba2f054d4bbc415b3ef2a"
    `);
  }
}
