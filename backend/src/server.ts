import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanages';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  }  = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  const orphanageCreated = await orphanagesRepository.save(orphanage);

  return res.status(201).json(orphanageCreated);
})

app.listen(3333);