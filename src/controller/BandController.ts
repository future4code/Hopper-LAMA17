import {Request, Response} from "express";
import { BandBusiness } from "../business/BandBusiness";

export class BandController {
    async create (req: Request, res: Response):Promise<void>{
        try {
            const {name, music_genre, responsible} = req.body;

            const bandBusiness = new BandBusiness();
            await bandBusiness.create({name, music_genre, responsible});

            res.status(201).send({message: "Banda cadastrada com sucesso"});
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async select(req: Request, res: Response){
        try{
            const bands = await new BandBusiness().select();
            res.send(bands).status(200);
        } catch (error: any){
            res.status(400).send(error.message);
        }
    }
}