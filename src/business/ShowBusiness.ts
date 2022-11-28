import { ShowDatabase } from "../data/ShowDatabase";
import { Booked, CustomError, InvalidDay, InvalidTime, Unauthorized } from "../error/CustomError";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()
const idGenerator = new IdGenerator

export class ShowBusiness {
    async create({week_day, start_time, end_time, band_id, token}: any):Promise<void> {
        try {
            if(!week_day || !start_time || !end_time || !band_id){
                throw new Error("Dados invalidos")
            }
    
            const day = (week_day).toLowerCase()
            if(day !== "sexta" && day !== "sábado" && day !== "domingo"){
                throw new InvalidDay();
            }
    
            if(Number(start_time) < 8 || 
            Number(end_time) > 23 || 
            start_time == "00" || 
            end_time == "00" || 
            Number(start_time) > Number(end_time))
            {
                 throw new InvalidTime();
            }

            const showDatabase = new ShowDatabase()

            const daySchedule = await showDatabase.checkSchedule(week_day)
            
            const validTime = daySchedule.filter((show:any) => 
                show.start_time <= start_time && show.end_time > end_time
            )
            if(validTime.length > 0){
                throw new Booked();
            } 
             
            const id:string = idGenerator.generateId();

            const { role } = authenticator.getTokenData(token)
            
            if (role === "ADMIN") {
                await showDatabase.create({
                    id,
                    week_day,
                    start_time,
                    end_time,
                    band_id
                })
            } else {
                throw new Unauthorized();
            }
            
        } catch(error: any) {
            throw new CustomError(400, error.message)
        }
        
    }

    // async daySchedule({week_day}:any):Promise<void>{
    //     try {
    //         const showDatabase = new ShowDatabase()
    //         const daySchedule = await showDatabase.checkSchedule(week_day)
    //     } catch(error: any) {
    //         throw new CustomError(400, error.message)
    //     }

    // }

    async select(){
        return await new ShowDatabase().select();
    }
}

