import { convertToCamelCase } from "./util";

export class KercherService {
    id?: string;
    psi?: number;
    chemicalsDescription?: string;
    serviceId?: string;

    constructor(data?: any) {
        data = convertToCamelCase(data) as Partial<KercherService>;
        Object.assign(this, data);
    }

}