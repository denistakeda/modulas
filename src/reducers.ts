import * as Actions from '~/Actions';
import { State } from '~/State';
import Quiz from '~/OOP/Quiz';
import Question from '~/OOP/Question';

const defaultState: State = {
    quiz: Quiz.init([new Question()]),
}

export function rootReducer(state: State = defaultState, action: Actions.ActionTypes) {
    switch (action.type) {
        case Actions.NEXT_QUESTION:
            return {...state, quiz: state.quiz.next()};
        case Actions.PREVIOUS_QUESTION:
            return {...state, quiz: state.quiz.previous()};
        case Actions.GOTO_QUESTION:
            return {...state, quiz: state.quiz.gotoNth(action.n)};
        default:
            return state;
    }
}
