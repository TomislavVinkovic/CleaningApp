export class CompanyRegistrationApiType {

    firstName?: string;
    lastName?: string;

    // company info
    email?: string;
    companyName?: string;
    companyOib?: string;
    companyAddress?: string;
    companyCity?: string;
    companyPostalCode?: string;

    companyDescription?: string;

    constructor(data?: Partial<CompanyRegistrationApiType>) {
        Object.assign(this, data);
    }
};