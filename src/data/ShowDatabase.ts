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
                .select("*")
                .from(ShowDatabase.TABLE_NAME)
                .orderBy({start_time}, asc)
            return result[0]
        }catch (error) {
            throw new CustomError(400, error.message)    
        }
    }
}




