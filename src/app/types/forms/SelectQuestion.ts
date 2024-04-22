import { QuestionBase } from "./QuestionBase";

class SelectQuestion extends QuestionBase<string> {
    override controlType = 'select';
}