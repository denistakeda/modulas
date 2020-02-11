export const OOP_NEXT_QUESTION = 'OOP/NEXT_MESSAGE';
export const OOP_PREVIOUS_QUESTION = 'OOP/PREVIOUS_MESSAGE';
export const OOP_GOTO_QUESTION = 'OOP/GOTO_QUESTION';
export const OOP_ANSWER_QUESTION = 'OOP/ANSWER_QUESTION';
export const OOP_FINISH_QUIZ = 'OOP/FINISH_QUIZ';

interface NextQuestionAction {
    type: typeof OOP_NEXT_QUESTION;
}

export function nextQuestion(): NextQuestionAction {
    return {
        type: OOP_NEXT_QUESTION,
    };
}

interface PreviousQuestionAction {
    type: typeof OOP_PREVIOUS_QUESTION;
}

export function previousQuestion(): PreviousQuestionAction {
    return {
        type: OOP_PREVIOUS_QUESTION,
    };
}

interface GotoQuestionAction {
    type: typeof OOP_GOTO_QUESTION;
    n: number;
}

export function gotoQuestion(n: number): GotoQuestionAction {
    return {
        type: OOP_GOTO_QUESTION,
        n,
    };
}

export interface AnswerQuestionAction {
    type: typeof OOP_ANSWER_QUESTION;
    answerNumber: number;
}

export function answerQuestion(answerNumber: number): AnswerQuestionAction {
    return {
        type: OOP_ANSWER_QUESTION,
        answerNumber,
    };
}

export interface FinishQuizAction {
    type: typeof OOP_FINISH_QUIZ;
}

export function finishQuiz(): FinishQuizAction {
    return { type: OOP_FINISH_QUIZ };
}

export interface OOPActions {
    nextQuestion: typeof nextQuestion;
    previousQuestion: typeof previousQuestion;
    gotoQuestion: typeof gotoQuestion;
    answerQuestion: typeof answerQuestion;
    finishQuiz: typeof finishQuiz;
}

export type Actions = OOPActions;

export const actions: Actions = {
    nextQuestion,
    previousQuestion,
    gotoQuestion,
    answerQuestion,
    finishQuiz,
};

export type ActionTypes =
    | NextQuestionAction
    | PreviousQuestionAction
    | GotoQuestionAction
    | AnswerQuestionAction
    | FinishQuizAction;
