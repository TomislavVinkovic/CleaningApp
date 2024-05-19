import { CarCleaningService } from "./car-cleaning-service";
import { CarpetCleaningService } from "./carpet-cleaning-service";
import { KercherService } from "./kercher-service";
import { SofaCleaningService } from "./sofa-cleaning-service";
import { convertToCamelCase } from "./util";

export class Service {
    id?: string;
    type?: 'kercher' | 'car' | 'carpet' | 'sofa';
    
    carCleaningService?: CarCleaningService;
    sofaCleaningService?: SofaCleaningService;
    carpetCleaningService?: CarpetCleaningService;
    kercherService?: KercherService;

    durationDays?: number;
    
    constructor(data?: any) {
        const servicePartial = convertToCamelCase(data) as Partial<Service>;
        console.log(data)
        Object.assign(this, servicePartial);

        if(servicePartial.carCleaningService) 
            this.carCleaningService = new CarCleaningService(servicePartial.carCleaningService);
        
        if(servicePartial.sofaCleaningService) 
            this.sofaCleaningService = new SofaCleaningService(servicePartial.sofaCleaningService);
        
        if(servicePartial.carpetCleaningService) 
            this.carpetCleaningService = new CarpetCleaningService(servicePartial.carpetCleaningService);
        
        if(servicePartial.kercherService) 
            this.kercherService = new KercherService(servicePartial.kercherService);
    }
}