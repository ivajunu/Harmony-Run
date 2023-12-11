import path from "path";
import cors from 'cors'
import dotenv from 'dotenv'
import { Client } from 'pg'
import express from 'express'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json())

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();


app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});

app.listen( function () {
  console.log("CORS-enabled web server listening on port 80");
});