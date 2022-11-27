import { Request, Response} from "express"
import { ShowBusiness } from "../business/ShowBusiness"

export class ShowController {
    async create (req: Request, res: Response):Promise<void>{
        try{
            const {week_day, start_time, end_time, band_id} = req.body;
            const token = req.headers.authorization as string

            const showBusiness = new ShowBusiness();
            await showBusiness.create({week_day, start_time, end_time, band_id, token});

            res.status(201).send({message: "Show cadastrado com sucesso"})
        
        }catch(error: any){
            res.status(400).send(error.message);
        }
    }

    async daySchedule(req: Request, res: Response){
        try{
            const day = req.body;

            const shows = await new ShowBusiness().daySchedule(day);
            res.send(shows).status(200);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    
    async select(req: Request, res: Response){
        try {
            const shows = await new ShowBusiness().select();
            res.send(shows).status(200);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}