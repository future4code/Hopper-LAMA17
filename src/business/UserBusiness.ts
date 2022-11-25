import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidPassword, UserNotFound } from "../error/CustomError";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {
    async signup({email, name, password, role}: any){
        if(!email || !name || !password){
            throw new Error("Dados invalidos")
        }

        if(!email.includes("@")){
            throw new Error("Email inválido");
        }

        const id:string = idGenerator.generateId();

        const userDatabase = new UserDatabase()
        await userDatabase.insertUser({
            id,
            name,
            email,
            password,
            role
        })

        const token = authenticator.generateToken({id})

        return token
    }

    async login({email, password}: any){
        try {
            if(!email || !password){
                throw new Error("Dados invalidos")
            }

            if(!email.includes("@")){
                throw new Error("Email inválido");
            }

            const userDatabase = new UserDatabase()
            const user = await userDatabase.findUser({email});

            if(!user) {
                throw new UserNotFound()
            }
            if(user.password !== password) {
                throw new InvalidPassword
            }

            const token = authenticator.generateToken({id: user.id})
            
            return token

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    async editUser({name, email, password, role, token}: any){
        try {
            if(!email || !password){
                throw new Error("Dados invalidos")
            }

            if(!email.includes("@")){
                throw new Error("Email inválido");
            }

            const { id } = authenticator.getTokenData(token)

            const userDatabase = new UserDatabase()
            await userDatabase.editUser({id, name, email, password, role});
            

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    async select(){
        return await new UserDatabase().select();
    }
}