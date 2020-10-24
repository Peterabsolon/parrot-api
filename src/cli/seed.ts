require('dotenv').config()

import pg from 'pg'

const dbName = process.env.PGDATABASE || 'parrot'
const dbConfig = {
  database: dbName,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
}

async function seed() {
  const client = new pg.Client(dbConfig)
  await client.connect()
  try {
    await client.query(`
      INSERT INTO "user"
      VALUES (1, 'admin@parrothq.com', 'Admin', '');
    `)
  } finally {
    await client.end()
  }
}

seed()
