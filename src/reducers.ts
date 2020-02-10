import * as Actions from '~/Actions';
import { State } from '~/State';
import Quiz from '~/OOP/Quiz';
import Question from '~/OOP/Question';

const defaultState: State = {
    quiz: Quiz.init([
        new Question(),
        new Question(),
        new Question(),
        new Question(),
        new Question(),
    ]),
};

export function rootReducer(
    state: State = defaultState,
    action: Actions.ActionTypes
) {
    switch (action.type) {
        case Actions.OOP_NEXT_QUESTION:
            return { ...state, quiz: state.quiz.next() };
        case Actions.OOP_PREVIOUS_QUESTION:
            return { ...state, quiz: state.quiz.previous() };
        case Actions.OOP_GOTO_QUESTION:
            return { ...state, quiz: state.quiz.gotoNth(action.n) };
        default:
            return state;
    }
}
