import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_USERS";

    async create({ id, name, email, password, role}: any): Promise<void>{
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