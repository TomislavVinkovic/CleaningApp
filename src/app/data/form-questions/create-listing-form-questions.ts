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
            type: 'text',
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
                { key: 'rent', value: 'Najam' },
                { key: 'service', value: 'Usluga' }
            ],
            order: 9
        }),
        new SelectQuestion({
            key: 'listingCategory',
            label: 'Kategorija oglasa',
            // options will be defined in the component
            options: [{ key: 'rent', value: 'Najam' },],
            order: 10
        }),

        // Depending on the service chosen, one of these input groups will be shown

        // CARPET CLEANING
        new TextQuestion({
            key: 'listingCarpetArea',
            type: 'number',
            label: 'Površina tepiha',
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 11
        }),

        // SOFA CLEANING
        new TextQuestion({
            key: 'listingSofaNumberOfSeats',
            type: 'number',
            label: 'Broj sjedala',
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 12
        }),

        // CAR CLEANING
        new SelectQuestion({
            key: 'listingCarType',
            label: 'Tip vozila',
            options: [
                { key: 'suv', value: 'SUV' },
                { key: 'sedan', value: 'Sedan' },
                { key: 'hatchback', value: 'Hatchback' },
                { key: 'coupe', value: 'Coupe' },
                { key: 'cabriolet', value: 'Cabriolet' },
                { key: 'minivan', value: 'Mini kombi' },
                { key: 'pickup', value: 'Pickup' },
                { key: 'van', value: 'Kombi' },
            ],  
            // options will be defined in the component
            // validator: Validators.compose([Validators.required]),
            order: 13
        }),
        new TextQuestion({
            key: 'listingCarSeats',
            type: 'number',
            label: 'Broj sjedala', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 14
        }),

        // Kercher
        new TextQuestion({
            key: 'listingKercherPSI',
            type: 'number',
            label: 'PSI', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 15
        }),
        new TextboxQuestion({
            key: 'listingKercherChemicals',
            type: 'text',
            label: 'Opis potrebnih kemikalija', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 16
        }),
        new TextboxQuestion({
            key: 'listingKercherRentDays',
            type: 'number',
            label: 'Duljina najma', 
            // options will be defined in the component
            // validator: Validators.compose([Validators.maxLength(1000)]),
            order: 17
        }),


    ];

    return questions.sort((a, b) => a.order - b.order)
}