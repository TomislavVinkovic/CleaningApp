export type CarType = 'sedan' | 'hatchback' | 'suv' | 'van' | 'pickup' | 'coupe' | 'cabriolet' | 'minivan';

export class CreateListingApiType {
    firstName?: string;
    lastName?: string;
    email?: string;
    oib?: string;

    listingDate?: string;
    listingAddress?: string;
    listingCity?: string;
    listingPostalCode?: string;

    listingType?: 'rent' | 'service';
    listingCategory?: 'carpet' | 'sofa' | 'car' | 'kercher';

    // additional options
    listingCarpetArea?: number;

    listingSofaNumberOfSeats?: number;

    listingCarType? :CarType;
    listingCarSeats?: number;

    listingKercherPSI?: number;
    listingKercherChemicals?: string;
    durationDays?: number;

    constructor(data?: Partial<CreateListingApiType>) {
        Object.assign(this, data);
    }
}