export const OOP_NEXT_QUESTION = 'NEXT_MESSAGE';
export const OOP_PREVIOUS_QUESTION = 'PREVIOUS_MESSAGE';
export const OOP_GOTO_QUESTION = 'GOTO_QUESTION';

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
        n
    };
}

export interface OOPActions {
    nextQuestion: typeof nextQuestion;
    previousQuestion: typeof previousQuestion;
    gotoQuestion: typeof gotoQuestion;
}

export type Actions = OOPActions;

export const actions: Actions = {
    nextQuestion,
    previousQuestion,
    gotoQuestion,
};

export type ActionTypes = NextQuestionAction | PreviousQuestionAction | GotoQuestionAction;
