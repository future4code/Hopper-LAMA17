import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";
import { CustomError, InvalidRole, Unauthorized } from "../error/CustomError";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class BandBusiness {
    async create ({name, music_genre, responsible, token}: any):Promise<void>{
        try
            {
            if(!name || !music_genre || !responsible){
                throw new Error("Dados invalidos")
            }

            const id:string = idGenerator.generateId();

            const { role } = authenticator.getTokenData(token)

            if(role === "ADMIN"){
                const bandDatabase = new BandDatabase()
                await bandDatabase.create({
                    id,
                    name,
                    music_genre,
                    responsible
                })
            } else {
                throw new Unauthorized();
            }
        } catch(error: any) {
            throw new CustomError(400, error.message)
        }
    } 

    async findBand(info: any){
        return await new BandDatabase().findBand(info);
    }
}