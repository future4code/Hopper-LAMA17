import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../types/Show";

export class ShowDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_SHOWS";

    async create({id, week_day, start_time, end_time, band_id}: any): Promise<void>{
        await ShowDatabase.connection
        .insert({
            id,
            week_day,
            start_time,
            end_time,
            band_id,
        })
        .into(ShowDatabase.TABLE_NAME)
    }

    async select(){
        try {
            const shows: Show[] = [];

            const result = await
            ShowDatabase
                .connection
                .select("*")
                .from(ShowDatabase.TABLE_NAME)

            for(let show of result){
                shows.push(show)
            }
            return shows
            
        } catch (error) {
            
        }
    }
}




