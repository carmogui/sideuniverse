import migrationRunner, { RunnerOption } from "node-pg-migrate";
import { resolve } from "node:path";
import { database } from "database";
import { RequestData } from "next/dist/server/web/types";
import { NextApiResponse } from "next";

const allowedMethods = ["GET", "POST"];

export default async function migrations(
  request: RequestData,
  response: NextApiResponse,
) {
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }

  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const defaultMigrationOptions: RunnerOption = {
      dbClient: dbClient,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);

      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationOptions,
        dryRun: false,
      });

      if (migratedMigrations.length) {
        return response.status(201).json(migratedMigrations);
      }

      return response.status(200).json(migratedMigrations);
    }
  } catch (error) {
    console.error(error);

    throw error;
  } finally {
    await dbClient?.end();
  }
}
