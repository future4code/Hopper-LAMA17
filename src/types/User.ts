export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: UserRole
    ) {}

    getId(){return this.id}
    getName(){return this.name}
    getEmail(){return this.email}
    getPassword(){return this.password}
    getRolet(){return this.role}

    setId(newId: string){this.id = newId}
    setName(newName: string){this.name = newName}
    setEmail(newEmail: string){this.email = newEmail}
    setPassword(newPassword: string){this.password = newPassword}
    setRole(newRole: UserRole){this.role = newRole}
}

export type AuthenticationData = {
    id: string,
    role: UserRole
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
}