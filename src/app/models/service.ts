import { convertToCamelCase } from "./util";

export class Service {
    id?: string;
    type?: string;
    durationDays?: number;
    
    constructor(data?: any) {
        const listingPartial = convertToCamelCase(data) as Partial<Service>;
        Object.assign(this, listingPartial);
    }
}