import { Validators } from "@angular/forms";
import { TextQuestion } from "../../types/forms/TextQuestion";
import { TextboxQuestion } from "../../types/forms/TextboxQuestion";

export const getCompanyRegistrationFormQuestions = () => {
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

        // company info
        new TextQuestion({
            key: 'email',
            type: 'email',
            label: 'E-mail adresa',
            validator: Validators.compose([Validators.required, Validators.email]),
            order: 3
        }),

        new TextQuestion({
            key: 'companyName',
            type: 'text',
            label: 'Ime',
            validator: Validators.compose([Validators.required]),
            order: 4
        }),
        new TextQuestion({
            key: 'companyOib',
            type: 'text',
            label: 'OIB',
            validator: Validators.compose([
                Validators.required, 
                Validators.minLength(11), 
                Validators.maxLength(11)
            ]),
            order: 5
        }),
        
        new TextQuestion({
            key: 'companyAddress',
            type: 'text',
            label: 'Adresa',
            validator: Validators.compose([Validators.required]),
            order: 6
        }),
        new TextQuestion({
            key: 'companyCity',
            type: 'text',
            label: 'Grad',
            validator: Validators.compose([Validators.required]),
            order: 7
        }),
        new TextQuestion({
            key: 'companyPostalCode',
            type: 'text',
            label: 'Poštanski broj',
            validator: Validators.compose([Validators.required]),
            order: 8
        }),
        new TextboxQuestion({
            key: 'companyDescription',
            type: 'text',
            label: 'Opis tvrtke',
            validator: Validators.compose([Validators.maxLength(1000)]),
            order: 9
        }),
    ];

    return questions.sort((a, b) => a.order - b.order)
}