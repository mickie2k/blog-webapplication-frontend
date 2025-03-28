import { Role } from "@/enum/role.enum";

export interface User {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    role: Role,
}