import {MigrationInterface, QueryRunner} from "typeorm";

export class repoprovas1640019232104 implements MigrationInterface {
    name = 'repoprovas1640019232104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_fk0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk1"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "tests_fk2"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "professor_discipline_fk0"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "professor_discipline_fk1"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "PK_43172bb852d8e6beec971ac8b2e"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "PK_1d7acf53d86d5e442d9b1cd67eb" PRIMARY KEY ("id_professor", "id_discipline")`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "periods" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "periods" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "professors" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "disciplines" ALTER COLUMN "id_period" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD CONSTRAINT "UQ_c7c02deec69eddc3fbb1c37d2cb" UNIQUE ("id_period")`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "UQ_006b58997fcbd0d8035283fb543" UNIQUE ("id_category")`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_professor" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "UQ_4a9074afa067556fe3836ec5d55" UNIQUE ("id_professor")`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_discipline" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "UQ_4a2c264ad98f0900f73c277ef23" UNIQUE ("id_discipline")`);
        await queryRunner.query(`CREATE INDEX "IDX_d3af524f5049fdc11e6e850483" ON "professor_discipline" ("id_professor") `);
        await queryRunner.query(`CREATE INDEX "IDX_120ca2f6c4bba26461e6e45d65" ON "professor_discipline" ("id_discipline") `);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD CONSTRAINT "FK_c7c02deec69eddc3fbb1c37d2cb" FOREIGN KEY ("id_period") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_006b58997fcbd0d8035283fb543" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_4a9074afa067556fe3836ec5d55" FOREIGN KEY ("id_professor") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_4a2c264ad98f0900f73c277ef23" FOREIGN KEY ("id_discipline") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "FK_d3af524f5049fdc11e6e850483c" FOREIGN KEY ("id_professor") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "FK_120ca2f6c4bba26461e6e45d65d" FOREIGN KEY ("id_discipline") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "FK_120ca2f6c4bba26461e6e45d65d"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "FK_d3af524f5049fdc11e6e850483c"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_4a2c264ad98f0900f73c277ef23"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_4a9074afa067556fe3836ec5d55"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_006b58997fcbd0d8035283fb543"`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP CONSTRAINT "FK_c7c02deec69eddc3fbb1c37d2cb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_120ca2f6c4bba26461e6e45d65"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d3af524f5049fdc11e6e850483"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "UQ_4a2c264ad98f0900f73c277ef23"`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_discipline" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "UQ_4a9074afa067556fe3836ec5d55"`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_professor" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "UQ_006b58997fcbd0d8035283fb543"`);
        await queryRunner.query(`ALTER TABLE "tests" ALTER COLUMN "id_category" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "link" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tests" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD "name" character varying(6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP CONSTRAINT "UQ_c7c02deec69eddc3fbb1c37d2cb"`);
        await queryRunner.query(`ALTER TABLE "disciplines" ALTER COLUMN "id_period" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD "name" character varying(75) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "professors" ADD "name" character varying(75) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "periods" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "periods" ADD "name" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" DROP CONSTRAINT "PK_1d7acf53d86d5e442d9b1cd67eb"`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "PK_43172bb852d8e6beec971ac8b2e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "professor_discipline_fk1" FOREIGN KEY ("id_discipline") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_discipline" ADD CONSTRAINT "professor_discipline_fk0" FOREIGN KEY ("id_professor") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("id_discipline") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("id_professor") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_fk0" FOREIGN KEY ("id_period") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
