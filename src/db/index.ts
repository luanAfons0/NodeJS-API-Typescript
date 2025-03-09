import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });

function validateResult(queryResult: any[]) {
  switch (true) {
    case queryResult.length <= 0:
      return undefined;

    case queryResult.length === 1:
      return queryResult[0];

    default:
      return queryResult;
  }
}

export default { db, validateResult };
