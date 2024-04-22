import { QuestionBase } from "./QuestionBase";

export class TextQuestion extends QuestionBase<string> {
    override controlType = 'text'
}