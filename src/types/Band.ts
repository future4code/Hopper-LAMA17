import { idText } from "typescript";

export class Band{
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ) {}

    getId(){return this.id}
    getName(){return this.name}
    getGenre(){return this.music_genre}
    getResponsible(){return this.responsible}

    setId(newId: string){this.id = newId}
    setName(newName: string){this.name = newName}
    setGenre(newGenre: string){this.music_genre = newGenre}
    setResponsible(newResponsible: string){this.responsible = newResponsible}
}

