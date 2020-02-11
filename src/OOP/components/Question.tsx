import * as React from 'react';
import Question from '~/OOP/Question';
import * as Actions from '~/Actions';

interface Props {
    question: Question;
    actions: Pick<Actions.Actions, 'answerQuestion'>;
}

const QuestionView = ({ question, actions }: Props) => (
    <div className="question">
        <div className="question-text">{question.text}</div>
        <div className="question-answes">
            {question.answers.map((answer, i) => (
                <div
                    key={i}
                    className={`question-answer ${
                        question.isSelectedAnswer(i) ? 'selected' : ''
                    }`}
                    onClick={() => actions.answerQuestion(i)}
                >
                    {answer}
                </div>
            ))}
        </div>
    </div>
);

export default QuestionView;
