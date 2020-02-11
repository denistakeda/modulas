import * as React from 'react';
import Quiz from '~/OOP/Quiz';
import { OOPActions } from '~/OOP/Actions';
import Question from '~/OOP/components/Question';

interface Props {
    quiz: Quiz;
    actions: OOPActions;
}

const QuizView = ({ quiz, actions }: Props) => (
    <div className="quiz">
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
            <Question
                question={quiz.getCurrent()}
                actions={{ answerQuestion: actions.answerQuestion }}
            />
        </span>
    </div>
);

export default QuizView;
