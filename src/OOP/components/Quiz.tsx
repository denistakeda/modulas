import * as React from 'react';
import Quiz from '~/OOP/Quiz';
import { OOPActions } from '~/OOP/Actions';
import Question from '~/OOP/components/Question';

interface Props {
    quiz: Quiz;
    actions: OOPActions;
}

function renderIndexes(
    amount: number,
    current: number,
    gotoQuestion: (n: number) => void
) {
    let list = [];
    for (let i = 0; i < amount; i++) {
        list.push(
            <span
                className={`quiz-navigation ${i == current ? 'selected' : ''}`}
                onClick={() => gotoQuestion(i)}
            >
                {i + 1}
            </span>
        );
    }
    return list;
}

const QuizView = ({ quiz, actions }: Props) => (
    <div className="quiz">
        <div className="quiz-navigation">
            <button
                onClick={actions.previousQuestion}
                disabled={!quiz.hasPrevious()}
            >
                {'<<'}
            </button>

            {renderIndexes(
                quiz.size(),
                quiz.currentNumber(),
                actions.gotoQuestion
            )}

            <button onClick={actions.nextQuestion} disabled={!quiz.hasNext()}>
                {'>>'}
            </button>
        </div>
        <Question
            question={quiz.getCurrent()}
            actions={{ answerQuestion: actions.answerQuestion }}
        />
    </div>
);

export default QuizView;
