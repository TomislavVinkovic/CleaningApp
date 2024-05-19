import { Listing } from "./listing";
import { convertToCamelCase } from "./util";

export class Job {
    id?: string;
    price?: number;
    isCompleted?: boolean;
    listing?: Listing;

    constructor(data?: any) {
        const jobPartial = convertToCamelCase(data) as Partial<Job>;
        Object.assign(this, jobPartial);

        if(jobPartial && jobPartial.listing) {
            this.listing = new Listing(jobPartial.listing);
        }
    }
}