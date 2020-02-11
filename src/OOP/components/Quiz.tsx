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
            <div
                className={`quiz-navigation-item ${
                    i == current ? 'selected' : ''
                }`}
                onClick={() => gotoQuestion(i)}
                key={i}
            >
                {i + 1}
            </div>
        );
    }
    return list;
}

function renderQuiz({ quiz, actions }: Props) {
    return (
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

                <button
                    onClick={actions.nextQuestion}
                    disabled={!quiz.hasNext()}
                >
                    {'>>'}
                </button>
            </div>
            {quiz.fullyAnswered() && (
                <button className="finish-button" onClick={actions.finishQuiz}>
                    Finish
                </button>
            )}
            <Question
                question={quiz.getCurrent()}
                actions={{ answerQuestion: actions.answerQuestion }}
            />
        </div>
    );
}

function renderScore({ quiz }: Props) {
    const [score, total] = quiz.getScore();
    return (
        <div className="score">
            <div>
                <span>Congratulations! you answered correctly </span>
                <span className="user-score">{score}</span>
                <span> questions out of </span>
                <span className="total-score">{total}</span>
                <span>!</span>
            </div>
        </div>
    );
}

const QuizView = (props: Props) =>
    props.quiz.isFinished() ? renderScore(props) : renderQuiz(props);

export default QuizView;
