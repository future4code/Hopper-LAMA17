import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../types/Show";
import { CustomError } from "../error/CustomError";

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

    async checkSchedule(day: string): Promise<Show[]>{
        try {
            const result = await ShowDatabase
                .connection
                .select("*")
                .where({week_day: day})
                .from(ShowDatabase.TABLE_NAME)
            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    async daySchedule(day: string){
        try {
            const result = await ShowDatabase
                .connection
                .select("start_time, name, music_genre")
                .from(`${ShowDatabase.TABLE_NAME}, LAMA_BANDS`)
                .where(`band_id = LAMA_BANDS.id AND week_day = ${day}`)
            return result[0]
        }catch (error) {
            throw new CustomError(400, error.message)    
        }
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
            
        } catch(error:any){
            throw new Error(error.message)
        }
    }
}




