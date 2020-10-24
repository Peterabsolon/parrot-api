require('dotenv').config()

import { createDb, migrate } from 'postgres-migrations'
import pg from 'pg'

const dbName = process.env.PGDATABASE || 'parrot'
const dbConfig = {
  database: dbName,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
}

async function runMigrations() {
  {
    const client = new pg.Client({
      ...dbConfig,
      database: 'postgres',
    })
    await client.connect()
    try {
      await createDb(dbName, { client })
    } finally {
      await client.end()
    }
  }

  {
    const client = new pg.Client(dbConfig)
    await client.connect()
    try {
      await migrate({ client }, './src/migrations/')
    } finally {
      await client.end()
    }
  }
}

runMigrations()
