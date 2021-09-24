import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRegisterTable1632444702081 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "register",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "varchar",
          },
          {
            name: "last_name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "phone_number",
            type: "varchar",
          },
          {
            name: "first_adress",
            type: "varchar",
          },
          {
            name: "second_adress",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "zip_code",
            type: "varchar",
          },
          {
            name: "language",
            type: "varchar",
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "billing_city",
            type: "varchar",
          },
          {
            name: "billing_state",
            type: "varchar",
          },
          {
            name: "billing_zip_code",
            type: "varchar",
          },
          {
            name: "primary_billing_adress",
            type: "varchar",
          },
          {
            name: "secondary_billing_adress",
            type: "varchar",
          },
          {
            name: "fcut_device",
            type: "boolean",
          },
          {
            name: "other_installed_trackers",
            type: "boolean",
          },
          {
            name: "identify_fleet_drivers",
            type: "boolean",
          },
          {
            name: "same_shipping_adress",
            type: "boolean",
          },
          {
            name: "tracker_quantity",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",

            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("register");
  }
}
