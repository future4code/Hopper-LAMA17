import {Request, Response} from "express";
import { BandBusiness } from "../business/BandBusiness";

export class BandController {
    async create (req: Request, res: Response):Promise<void>{
        try {
            const {name, music_genre, responsible} = req.body;
            const token = req.headers.authorization as string

            const bandBusiness = new BandBusiness();
            await bandBusiness.create({name, music_genre, responsible, token});

            res.status(201).send({message: "Banda cadastrada com sucesso"});
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async findBand(req: Request, res: Response){
        try{
            const info = req.body;

            const band = await new BandBusiness().findBand(info);

            res.send(band).status(200);
        } catch (error: any){
            res.status(400).send(error.message);
        }
    }
}