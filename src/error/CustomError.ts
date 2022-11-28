export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class UserNotFound extends CustomError{
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class InvalidPassword extends CustomError{
    constructor(){
        super(400, "Senha inválida")
    }
}

export class Unauthorized extends CustomError{
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class InvalidRole extends CustomError{
    constructor(){
        super(401, "Cargo inválido")
    }
}

export class InvalidDay extends CustomError{
    constructor(){
        super(401, "Dia inválido")
    }
}
export class InvalidTime extends CustomError{
    constructor(){
        super(401, "Horário inválido")
    }
}
export class Booked extends CustomError{
    constructor(){
        super(401, "Outro show já registrado nesse horário")
    }
}