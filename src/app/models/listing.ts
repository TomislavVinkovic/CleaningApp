import { Service } from "./service";
import { convertToCamelCase } from "./util";

export class Listing {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    oib?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    type?: string;
    service?: Service;

    constructor(data?: any) {
        const listingPartial = convertToCamelCase(data) as Partial<Listing>;
        Object.assign(this, listingPartial);
    }
}