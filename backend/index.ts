import path from "path";
import cors from 'cors'
import dotenv from 'dotenv'
import { Client } from 'pg'
import express from 'express'

import score from './routes/score'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json())

export const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// routes
app.use(score);

// GET anrop
app.get("/api", async (req, res) => {

  const { rows } = await client.query(
      `SELECT * FROM high`
  );
    console.log("Get user info", rows);
    res.send(rows);
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
