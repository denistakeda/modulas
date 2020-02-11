import * as Actions from '~/Actions';
import { State } from '~/State';
import Quiz from '~/OOP/Quiz';
import Question from '~/OOP/Question';

const defaultState: State = {
    quiz: Quiz.init([
        new Question(
            'Do you like JavaScript?',
            ['Yes', 'No', 'Are you mad?', 'What are you talking about?'],
            0
        ),
        new Question('Do you like OOP?', ['Yes', 'No', "It's too old"], 0),
        new Question(
            'Do you like FP?',
            ['Of couse I do!', 'Not quite', "It's too complex"],
            0
        ),
        new Question(
            'Do you like programming at all?',
            [
                'Weird question',
                'Of couse I do!',
                'You are talking to professional programmer!',
            ],
            2
        ),
        new Question(
            'Do you like books?',
            ['I adore books', 'No', 'I LOVE them'],
            2
        ),
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
        case Actions.OOP_ANSWER_QUESTION:
            return {
                ...state,
                quiz: state.quiz.answerCurrentQuestion(action.answerNumber).next(),
            };
        default:
            return state;
    }
}
