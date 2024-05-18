import { Validators } from "@angular/forms";
import { TextQuestion } from "../../types/forms/TextQuestion";

export const getLoginFormQuestions = () => {
    const questions = [
        new TextQuestion({
            key: 'email',
            type: 'email',
            label: 'E-mail adresa',
            validator: Validators.compose([Validators.required, Validators.email]),
            order: 1
        }),
        new TextQuestion({
            key: 'password',
            type: 'password',
            label: 'Lozinka',
            validator: Validators.required,
            order: 2
        }),
    ];

    return questions.sort((a, b) => a.order - b.order)
}
    