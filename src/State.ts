import Quiz from '~/OOP/Quiz';

export type Mode = 'OOP' | 'FP';

export interface State {
    mode: Mode;
    quiz: Quiz;
}
