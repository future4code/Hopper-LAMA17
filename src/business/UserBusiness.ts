import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId} from 'uuid'

export class UserBusiness {
    async create({email, name, password, role}: any):Promise<void>{
        if(!email || !name || !password){
            throw new Error("Dados invalidos")
        }

        const id = generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.create({
            id,
            name,
            email,
            password,
            role
        })
    }

    async select(){
        return await new UserDatabase().select();
    }
}