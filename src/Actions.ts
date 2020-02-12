// -- General Actions --

export const SELECT_OOP = 'SELECT_OOP';
export const SELECT_FP = 'SELECT_FP';

interface SelectOOPAction {
    type: typeof SELECT_OOP;
}

export function selectOOP() {
    return { type: SELECT_OOP };
}

interface SelectFPAction {
    type: typeof SELECT_FP;
}

export function selectFP() {
    return { type: SELECT_FP };
}

export interface GeneralActions {
    selectOOP: typeof selectOOP;
    selectFP: typeof selectFP;
}

const generalActions: GeneralActions = {
    selectOOP,
    selectFP,
};

// -- OOP Actions --

export const OOP_NEXT_QUESTION = 'OOP/NEXT_MESSAGE';
export const OOP_PREVIOUS_QUESTION = 'OOP/PREVIOUS_MESSAGE';
export const OOP_GOTO_QUESTION = 'OOP/GOTO_QUESTION';
export const OOP_ANSWER_QUESTION = 'OOP/ANSWER_QUESTION';
export const OOP_FINISH_QUIZ = 'OOP/FINISH_QUIZ';

interface OOPNextQuestionAction {
    type: typeof OOP_NEXT_QUESTION;
}

function oopNextQuestion(): OOPNextQuestionAction {
    return {
        type: OOP_NEXT_QUESTION,
    };
}

interface OOPPreviousQuestionAction {
    type: typeof OOP_PREVIOUS_QUESTION;
}

function oopPreviousQuestion(): OOPPreviousQuestionAction {
    return {
        type: OOP_PREVIOUS_QUESTION,
    };
}

interface OOPGotoQuestionAction {
    type: typeof OOP_GOTO_QUESTION;
    n: number;
}

function oopGotoQuestion(n: number): OOPGotoQuestionAction {
    return {
        type: OOP_GOTO_QUESTION,
        n,
    };
}

interface OOPAnswerQuestionAction {
    type: typeof OOP_ANSWER_QUESTION;
    answerNumber: number;
}

function oopAnswerQuestion(answerNumber: number): OOPAnswerQuestionAction {
    return {
        type: OOP_ANSWER_QUESTION,
        answerNumber,
    };
}

interface OOPFinishQuizAction {
    type: typeof OOP_FINISH_QUIZ;
}

function oopFinishQuiz(): OOPFinishQuizAction {
    return { type: OOP_FINISH_QUIZ };
}

export interface OOPActions {
    oopNextQuestion: typeof oopNextQuestion;
    oopPreviousQuestion: typeof oopPreviousQuestion;
    oopGotoQuestion: typeof oopGotoQuestion;
    oopAnswerQuestion: typeof oopAnswerQuestion;
    oopFinishQuiz: typeof oopFinishQuiz;
}

const oopActions: OOPActions = {
    oopNextQuestion,
    oopPreviousQuestion,
    oopGotoQuestion,
    oopAnswerQuestion,
    oopFinishQuiz,
};

// -- FP Actions --

export const FP_NEXT_QUESTION = 'FP/NEXT_MESSAGE';
export const FP_PREVIOUS_QUESTION = 'FP/PREVIOUS_MESSAGE';
export const FP_GOTO_QUESTION = 'FP/GOTO_QUESTION';
export const FP_ANSWER_QUESTION = 'FP/ANSWER_QUESTION';
export const FP_FINISH_QUIZ = 'FP/FINISH_QUIZ';

interface FPNextQuestionAction {
    type: typeof FP_NEXT_QUESTION;
}

function fpNextQuestion(): FPNextQuestionAction {
    return {
        type: FP_NEXT_QUESTION,
    };
}

interface FPPreviousQuestionAction {
    type: typeof FP_PREVIOUS_QUESTION;
}

function fpPreviousQuestion(): FPPreviousQuestionAction {
    return {
        type: FP_PREVIOUS_QUESTION,
    };
}

interface FPGotoQuestionAction {
    type: typeof FP_GOTO_QUESTION;
    n: number;
}

function fpGotoQuestion(n: number): FPGotoQuestionAction {
    return {
        type: FP_GOTO_QUESTION,
        n,
    };
}

interface FPAnswerQuestionAction {
    type: typeof FP_ANSWER_QUESTION;
    n: number;
}

function fpAnswerQuestion(n: number): FPAnswerQuestionAction {
    return {
        type: FP_ANSWER_QUESTION,
        n,
    };
}

interface FPFinishQuizAction {
    type: typeof FP_FINISH_QUIZ;
}

function fpFinishQuiz(): FPFinishQuizAction {
    return { type: FP_FINISH_QUIZ };
}

export interface FPActions {
    fpNextQuestion: typeof fpNextQuestion;
    fpPreviousQuestion: typeof fpPreviousQuestion;
    fpGotoQuestion: typeof fpGotoQuestion;
    fpAnswerQuestion: typeof fpAnswerQuestion;
    fpFinishQuiz: typeof fpFinishQuiz;
}

const fpActions: FPActions = {
    fpNextQuestion,
    fpPreviousQuestion,
    fpGotoQuestion,
    fpAnswerQuestion,
    fpFinishQuiz,
};

// -- And one for rule them all --

export type Actions = GeneralActions & OOPActions & FPActions;

export const actions: Actions = {
    ...generalActions,
    ...oopActions,
    ...fpActions,
};

export type ActionTypes =
    | SelectOOPAction
    | SelectFPAction
    | OOPNextQuestionAction
    | OOPPreviousQuestionAction
    | OOPGotoQuestionAction
    | OOPAnswerQuestionAction
    | OOPFinishQuizAction
    | FPNextQuestionAction
    | FPPreviousQuestionAction
    | FPGotoQuestionAction
    | FPAnswerQuestionAction
    | FPFinishQuizAction;
