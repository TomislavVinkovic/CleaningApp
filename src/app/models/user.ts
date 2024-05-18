import { Role } from "../app_constants";
import { convertToCamelCase } from "./util";

export class User {

    public id?: string;
    
    public name?: string;

    public email?: string;

    public phone?: string;

    public firstName?: string;

    public lastName?: string;

    public imageUrl?: string;

    public verifiedAt?: number;

    public roles?: Array<Role>;

    constructor(data?: any) {
        const userPartial = convertToCamelCase(data) as Partial<User>;
        Object.assign(this, userPartial);
    }
}