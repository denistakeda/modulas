import * as React from 'react';
import Question from '~/OOP/Question';
import * as Actions from '~/Actions';

interface Props {
    question: Question;
    actions: Pick<Actions.Actions, 'oopAnswerQuestion'>;
}

const QuestionView = ({ question, actions }: Props) => (
    <div className="question">
        <div className="question-text">{question.text}</div>
        <div className="question-answers">
            {question.answers.map((answer, i) => (
                <div
                    key={i}
                    className={`question-answer ${
                        question.isSelectedAnswer(i) ? 'selected' : ''
                    }`}
                    onClick={() => actions.oopAnswerQuestion(i)}
                >
                    {answer}
                </div>
            ))}
        </div>
    </div>
);

export default QuestionView;
