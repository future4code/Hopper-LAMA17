import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../types/Band";
import { CustomError } from "../error/CustomError";


export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_BANDS";

    async create({id, name, music_genre, responsible}: any): Promise<void>{
        await BandDatabase.connection
        .insert({
            id,
            name,
            music_genre,
            responsible,
        })
        .into(BandDatabase.TABLE_NAME);
    }

    async findBand(info:string){
        try {
            const result = await BandDatabase
                .connection
                .select()
                .where(info) 
                .from(BandDatabase.TABLE_NAME)

            return result[0]
            }
        catch(error:any){throw new CustomError(400, error.message)}
    }
}
