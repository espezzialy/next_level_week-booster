import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.name,
                image_url: `https;//localhost:3333/uploads/${item.image}`
            }
        })
    
        
        return response.json(items)   
    }
}

export default ItemsController;