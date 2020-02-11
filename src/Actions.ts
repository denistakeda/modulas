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

// -- And one for rule them all --

export type Actions = GeneralActions & OOPActions;

export const actions: Actions = {
    ...generalActions,
    ...oopActions,
};

export type ActionTypes =
    | SelectOOPAction
    | SelectFPAction
    | OOPNextQuestionAction
    | OOPPreviousQuestionAction
    | OOPGotoQuestionAction
    | OOPAnswerQuestionAction
    | OOPFinishQuizAction;
