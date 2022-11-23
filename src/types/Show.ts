export class Show{
    constructor(
        private id: string,
        private week_day: string,
        private start_time: Number,
        private end_time: Number,
        private band_id: string
    ) {}

    getId(){return this.id}
    getDay(){return this.week_day}
    getStart(){return this.start_time}
    getEnd(){return this.end_time}
    getBandId(){return this.band_id}

    setId(newId: string){this.id = newId}
    setDay(newDay: string){this.week_day = newDay}
    setStart(newStart: Number){this.start_time = newStart}
    setEnd(newEnd: Number){this.end_time = newEnd}
    setBandId(newBandId: string){this.band_id = newBandId}
}

