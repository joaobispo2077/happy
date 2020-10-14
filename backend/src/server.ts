import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', (req, res) => {
  const body  = req.body;
  const data = body;

  return res.status(201).json(data);
})

app.listen(3333);