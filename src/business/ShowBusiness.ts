import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/idGenerator";

const idGenerator = new IdGenerator

export class ShowBusiness {
    async create({week_day, start_time, end_time, band_id}: any):Promise<void> {
        if(!week_day || !start_time || !end_time || !band_id){
            throw new Error("Dados invalidos")
        }

        const id = `${idGenerator}`

        const showDatabase = new ShowDatabase()
        await showDatabase.create({
            id,
            week_day,
            start_time,
            end_time,
            band_id
        })
    }

    async select(){
        return await new ShowDatabase().select();
    }
}

