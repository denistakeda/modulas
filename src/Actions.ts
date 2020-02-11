export const OOP_NEXT_QUESTION = 'OOP/NEXT_MESSAGE';
export const OOP_PREVIOUS_QUESTION = 'OOP/PREVIOUS_MESSAGE';
export const OOP_GOTO_QUESTION = 'OOP/GOTO_QUESTION';
export const OOP_ANSWER_QUESTION = 'OOP/ANSWER_QUESTION';
export const OOP_FINISH_QUIZ = 'OOP/FINISH_QUIZ';

interface OOPNextQuestionAction {
    type: typeof OOP_NEXT_QUESTION;
}

export function oopNextQuestion(): OOPNextQuestionAction {
    return {
        type: OOP_NEXT_QUESTION,
    };
}

interface OOPPreviousQuestionAction {
    type: typeof OOP_PREVIOUS_QUESTION;
}

export function oopPreviousQuestion(): OOPPreviousQuestionAction {
    return {
        type: OOP_PREVIOUS_QUESTION,
    };
}

interface OOPGotoQuestionAction {
    type: typeof OOP_GOTO_QUESTION;
    n: number;
}

export function oopGotoQuestion(n: number): OOPGotoQuestionAction {
    return {
        type: OOP_GOTO_QUESTION,
        n,
    };
}

export interface OOPAnswerQuestionAction {
    type: typeof OOP_ANSWER_QUESTION;
    answerNumber: number;
}

export function oopAnswerQuestion(answerNumber: number): OOPAnswerQuestionAction {
    return {
        type: OOP_ANSWER_QUESTION,
        answerNumber,
    };
}

export interface OOPFinishQuizAction {
    type: typeof OOP_FINISH_QUIZ;
}

export function oopFinishQuiz(): OOPFinishQuizAction {
    return { type: OOP_FINISH_QUIZ };
}

export interface OOPActions {
    oopNextQuestion: typeof oopNextQuestion;
    oopPreviousQuestion: typeof oopPreviousQuestion;
    oopGotoQuestion: typeof oopGotoQuestion;
    oopAnswerQuestion: typeof oopAnswerQuestion;
    oopFinishQuiz: typeof oopFinishQuiz;
}

export type Actions = OOPActions;

export const actions: Actions = {
    oopNextQuestion,
    oopPreviousQuestion,
    oopGotoQuestion,
    oopAnswerQuestion,
    oopFinishQuiz,
};

export type ActionTypes =
    | OOPNextQuestionAction
    | OOPPreviousQuestionAction
    | OOPGotoQuestionAction
    | OOPAnswerQuestionAction
    | OOPFinishQuizAction;
