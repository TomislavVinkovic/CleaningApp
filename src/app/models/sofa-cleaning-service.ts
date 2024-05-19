import { convertToCamelCase } from "./util";

export class SofaCleaningService {
    id?: string;
    noSeats?: number;
    serviceId?: string;

    constructor(data?: any) {
        data = convertToCamelCase(data) as Partial<SofaCleaningService>;
        Object.assign(this, data);
    }

}