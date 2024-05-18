import { Validators } from "@angular/forms";
import { TextQuestion } from "../../types/forms/TextQuestion";
import { TextboxQuestion } from "../../types/forms/TextboxQuestion";
import { SelectQuestion } from "../../types/forms/SelectQuestion";

export const getCreateListingFormQuestions = () => {
    const questions = [
        // personal info
        new TextQuestion({
            key: 'firstName',
            type: 'text',
            label: 'Ime',
            validator: Validators.compose([Validators.required]),
            order: 1
        }),
        new TextQuestion({
            key: 'lastName',
            type: 'text',
            label: 'Prezime',
            validator: Validators.compose([Validators.required]),
            order: 2
        }),
        new TextQuestion({
            key: 'email',
            type: 'email',
            label: 'E-mail adresa',
            validator: Validators.compose([Validators.required, Validators.email]),
            order: 3
        }),
        new TextQuestion({
            key: 'oib',
            type: 'text',
            label: 'OIB',
            validator: Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
            order: 4
        }),

        // listing info
        new TextQuestion({
            key: 'listingDate',
            type: 'date',
            label: 'Željeni datum izvršenja usluge',
            validator: Validators.compose([Validators.required]),
            order: 5
        }),

        new TextQuestion({
            key: 'listingAddress',
            type: 'text',
            label: 'Adresa',
            validator: Validators.compose([Validators.required]),
            order: 6
        }),
        new TextQuestion({
            key: 'listingCity',
            type: 'text',
            label: 'Grad/općina',
            validator: Validators.compose([Validators.required]),
            order: 7
        }),
        new TextQuestion({
            key: 'listingPostalCode',
            type: 'text',
            label: 'Poštanski broj',
            validator: Validators.compose([Validators.required]),
            order: 8
        }),

        new SelectQuestion({
            key: 'listingType',
            label: 'Vrsta oglasa',
            options: [
                // TODO: fetch these from the server
                { key: 'Usluga', value: 'service' },
                { key: 'Najam', value: 'rent' },
            ],
            order: 9
        }),
        new SelectQuestion({
            key: 'listingCategoryService',
            label: 'Kategorija oglasa',
            // options will be defined in the component
            options: [
                { key: 'Čišćenje tepiha', value: 'carpet' },
                { key: 'Čišćenje kauča', value: 'sofa' },
                { key: 'Čišćenje automobila', value: 'car' },
            ],
            order: 10
        }),
        new SelectQuestion({
            key: 'listingCategoryRent',
            label: 'Kategorija oglasa',
            // options will be defined in the component
            options: [
                { key: 'Kercher', value: 'kercher' },
            ],
            order: 11
        }),

        // Depending on the service chosen, one of these input groups will be shown

        // CARPET CLEANING
        new TextQuestion({
            key: 'listingCarpetArea',
            type: 'number',
            label: 'Površina tepiha',
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 12
        }),

        // SOFA CLEANING
        new TextQuestion({
            key: 'listingSofaNumberOfSeats',
            type: 'number',
            label: 'Broj sjedala',
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 13
        }),

        // CAR CLEANING
        new SelectQuestion({
            key: 'listingCarType',
            label: 'Tip vozila',
            options: [
                { key: 'SUV', value: 'suv' },
                { key: 'Sedan', value: 'sedan' },
                { key: 'Hatchback', value: 'hatchback' },
                { key: 'Coupe', value: 'coupe' },
                { key: 'Cabriolet', value: 'cabriolet' },
                { key: 'Mini kombi', value: 'minivan' },
                { key: 'Pickup', value: 'pickup' },
                { key: 'Kombi', value: 'van' },
            ],  
            // options will be defined in the component
            // validator: Validators.compose([Validators.required]),
            order: 14
        }),
        new TextQuestion({
            key: 'listingCarSeats',
            type: 'number',
            label: 'Broj sjedala', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 15
        }),

        // Kercher
        new TextQuestion({
            key: 'listingKercherPSI',
            type: 'number',
            label: 'PSI', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 16
        }),
        new TextboxQuestion({
            key: 'listingKercherChemicals',
            type: 'text',
            label: 'Opis potrebnih kemikalija', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 17
        }),
        new TextQuestion({
            key: 'listingKercherRentDays',
            type: 'number',
            label: 'Duljina najma (u danima)', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 18
        }),


    ];

    return questions.sort((a, b) => a.order - b.order)
}