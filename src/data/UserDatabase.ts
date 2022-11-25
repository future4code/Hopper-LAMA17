import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_USERS";

    async insertUser({ id, name, email, password, role}: any): Promise<void>{
        await UserDatabase.connection
        .insert({
            id,
            name,
            email,
            password,
            role,
        })
        .into(UserDatabase.TABLE_NAME);
    }
    
    async editUser({ id, name, email, role}: any): Promise<void>{
        try {
            await UserDatabase.connection
                .update({name, email, role})
                .where({id: id})
                .into(UserDatabase.TABLE_NAME);
            }
        catch(error:any){throw new Error(error.message)}
    }

    async findUser({email}: any){
        try {
            const result = await UserDatabase
                .connection
                .select()
                .where({email})
                .from(UserDatabase.TABLE_NAME)

            return result[0]
            }
        catch(error:any){throw new CustomError(400, error.message)}
    }



    async select(){
        try {
            const users: User[] = [];

            const result = await
            UserDatabase
                .connection
                .select("*")
                .from(UserDatabase.TABLE_NAME)

            for(let user of result){
                users.push(user)
            }
            return users
            
        } catch(error:any){
            throw new Error(error.message)
        }
    }


}