import { Role } from "../app_constants";

export class User {

    public id?: string;
    
    public name?: string;

    public email?: string;

    public phone?: string;

    public firstName?: string;

    public lastName?: string;

    public imageUrl?: string;

    public roles?: Array<Role>;

    constructor(data?: Partial<User>) {
        Object.assign(this, data);
    }
}