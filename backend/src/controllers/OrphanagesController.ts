import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanages';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    }  = request.body;
  
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
  
    return response.status(201).json(orphanageCreated);
  }
}