import { convertToCamelCase } from "./util";

export class CarpetCleaningService {
    id?: string;
    area?: number;
    serviceId?: string;

    constructor(data?: any) {
        data = convertToCamelCase(data) as Partial<CarpetCleaningService>;
        Object.assign(this, data);
    }

}