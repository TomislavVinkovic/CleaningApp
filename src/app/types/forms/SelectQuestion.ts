import { QuestionBase } from "./QuestionBase";

export class SelectQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
}