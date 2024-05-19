import { Listing } from "./listing";
import { User } from "./user";
import { convertToCamelCase } from "./util";

export class Offer {
    id?: string;
    price?: number;
    user?: User;
    status?: string;
    listing?: Listing;

    constructor(data?: any) {
        const offerPartial = convertToCamelCase(data) as Partial<Offer>;
        Object.assign(this, offerPartial);

        if (data?.user) {
            this.user = new User(data.user);
        }
        if(data?.listing) {
            this.listing = new Listing(data.listing);
        }
    }
}