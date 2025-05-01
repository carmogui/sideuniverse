import { Client, QueryConfig } from "pg";

function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  }

  return process.env.NODE_ENV === "production";
}

async function getNewClient() {
  const port = process.env.POSTGRES_PORT;
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: port ? Number(port) : undefined,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  await client.connect();

  return client;
}

async function query(queryObject: string | QueryConfig<any[]>) {
  let client;

  try {
    client = await getNewClient();

    const response = await client.query(queryObject);

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  } finally {
    await client?.end();
  }
}

export const database = {
  query,
  getNewClient,
};
