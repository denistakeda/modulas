import * as React from 'react';
import Quiz from '~/OOP/Quiz';
import { OOPActions } from '~/OOP/Actions';

interface Props {
    quiz: Quiz;
    actions: OOPActions;
}

const QuizView = ({ quiz, actions }: Props) => (
    <div>
        <span className="current-number">
            <button
                onClick={actions.previousQuestion}
                disabled={!quiz.hasPrevious()}
            >
                {'<<'}
            </button>
            <span>{quiz.currentNumber()}</span>
            <button onClick={actions.nextQuestion} disabled={!quiz.hasNext()}>
                {'>>'}
            </button>
        </span>
    </div>
);

export default QuizView;
