export const NEXT_QUESTION = 'NEXT_MESSAGE';
export const PREVIOUS_QUESTION = 'PREVIOUS_MESSAGE';
export const GOTO_QUESTION = 'GOTO_QUESTION';

interface NextQuestionAction {
    type: typeof NEXT_QUESTION;
}

export function nextQuestion(): NextQuestionAction {
    return {
        type: NEXT_QUESTION,
    };
}

interface PreviousQuestionAction {
    type: typeof PREVIOUS_QUESTION;
}

export function previousQuestion(): PreviousQuestionAction {
    return {
        type: PREVIOUS_QUESTION,
    };
}

interface GotoQuestionAction {
    type: typeof GOTO_QUESTION;
    n: number;
}

export function gotoQuestion(n: number): GotoQuestionAction {
    return {
        type: GOTO_QUESTION,
        n
    };
}

export type ActionTypes = NextQuestionAction | PreviousQuestionAction | GotoQuestionAction;
