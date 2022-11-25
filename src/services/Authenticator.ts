import * as jwt from  "jsonwebtoken"
import { Unauthorized } from "../error/CustomError"
import { AuthenticationData } from "../types/User"

export class Authenticator {
    public generateToken = (id: string, role: string): any => {
        const token = jwt.sign(
            {id, role},
            process.env.JWT_KEY as string,
            {expiresIn:"1h"}
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload
        } catch (error: any) {
            console.log(error.message)
            throw new Unauthorized()
        }
        

    }
}