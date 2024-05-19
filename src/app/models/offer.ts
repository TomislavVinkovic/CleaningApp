import { Listing } from "./listing";
import { User } from "./user";
import { convertToCamelCase } from "./util";

export class Offer {
    id?: string;
    price?: number;
    user?: User;
    listing?: Listing;

    constructor(data?: any) {
        const offerPartial = convertToCamelCase(data) as Partial<Offer>;
    }
}