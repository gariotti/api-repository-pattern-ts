import {GET, POST, PUT, DELETE, route, rollUpState} from 'awilix-express';
import { Request, Response } from 'express';
import { BaseController } from '../common/controllers/base.controller';
import { MovementCreateDto } from '../dtos/movement.dto';
import { MovementService } from '../services/movement.service';

@route('/movements')
export class MovementController extends BaseController {

    constructor(private readonly movementService:MovementService) {
        super();
    }

    @GET()
    public async all(req: Request, res: Response) {

        try {
            res.send(await this.movementService.all());
        }
        catch (error) {
            this.handleException(error, res );
        }

        
    }

    @route('/:id')
    @GET()
    public async find(req: Request, res: Response) {

        try {
            const id= parseInt(req.params.id);
            const result = await this.movementService.find(id);
            
            if (result) {
                res.send(result);
            } else {
                res.status(404);
                res.send();
            }

        }
        catch (error) {
            this.handleException(error, res );
        }

        
    }

    @POST()
    public async store(req: Request, res: Response) {

        try {
            await this.movementService.store({
                user_id: req.body.user_id,
                type: req.body.type,
                amount: req.body.amount
            } as MovementCreateDto);
            res.send();
        }
        catch (error) {
            this.handleException(error, res );
        }
        
        
    }

  

}