import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {
    async create ({name, music_genre, responsible}: any):Promise<void>{
        if(!name || !music_genre || !responsible){
            throw new Error("Dados invalidos")
        }

        const id = `${name}${name.length}`

        const bandDatabase = new BandDatabase()
        await bandDatabase.create({
            id,
            name,
            music_genre,
            responsible
        })
    } 

    async select(){
        return await new BandDatabase().select();
    }
}