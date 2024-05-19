import { CarType } from "../types/api/create-listing-api";
import { convertToCamelCase } from "./util";

export class CarCleaningService {
    id?: string;
    noSeats?: number;
    carType?: CarType;
    serviceId?: string;

    constructor(data?: any) {
        console.log(data);
        data = convertToCamelCase(data) as Partial<CarCleaningService>;
        Object.assign(this, data);
    }

}