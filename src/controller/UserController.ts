import { Request, Response} from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    async signup (req: Request, res: Response):Promise<void>{
        try {
            const {email, name, password, role} = req.body;

            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup({email, name, password, role});

            res.status(201).send({message: "Usuário cadastrado com sucesso", token});
            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    async login (req: Request, res: Response):Promise<void>{
        try {
            const {email, password} = req.body;

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login({email, password});
            
            res.status(200).send(token);
            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    async editUser (req: Request, res: Response):Promise<void>{
        try {
            const {name, email, password, role} = req.body;
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness();
            await userBusiness.editUser({name, email, password, role, token});

            res.status(201).send({message: "Usuário alterado"});
            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    async select(req: Request, res: Response){
        try {
            const users = await new UserBusiness().select();
            res.send(users).status(200);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}