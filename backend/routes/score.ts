import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get("/score", async (req, res) => {
  const { score } = req.query;
  const { rows } = await client.query(`SELECT * FROM ${score}`);
  console.log("Get user info", rows);
  res.send(rows);

});

export default router;
