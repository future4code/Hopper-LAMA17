import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../types/Band";

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

    async select(){
        try {
            const bands: Band[] = [];

            const result = await
            BandDatabase
                .connection
                .select("*")
                .from(BandDatabase.TABLE_NAME)

            for(let band of result){
                bands.push(band)
            }
            return bands

        } catch(error:any){
            throw new Error(error.message)
        }
    }
}
