import Quiz from '~/OOP/Quiz';
import { Quiz as FPQuiz } from '~/FP/Quiz';

export type Mode = 'OOP' | 'FP';

export interface State {
    mode: Mode;
    quiz: Quiz;
    fpQuiz: FPQuiz;
}
