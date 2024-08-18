import 'dotenv/config';
import type { Config } from 'drizzle-kit';
 
export default {
    schema: './src/db/schema.ts',
    out: './drizzle/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL || "",
    }
} satisfies Config;
