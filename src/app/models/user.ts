import { Role } from "../app_constants";
import { Company } from "./company";
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

    public company? : Company;

    constructor(data?: any) {
        const userPartial = convertToCamelCase(data) as Partial<User>;
        Object.assign(this, userPartial);
        
        // props that need special assignment
        if(data?.company) {
            this.company = new Company(data.company);
        }
    }
}