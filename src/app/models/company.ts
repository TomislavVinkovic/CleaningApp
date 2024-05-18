import { convertToCamelCase } from "./util";

export class Company {

    public id?: string;
    
    public name?: string;

    public oib?: string;

    public address?: string;

    public city?: string;

    public postalCode?: string;

    public userId?: string;

    public description?: number;

    constructor(data?: any) {
        const userPartial = convertToCamelCase(data) as Partial<Company>;
        Object.assign(this, userPartial);
    }
}