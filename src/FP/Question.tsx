import * as React from 'react';

import { Actions } from '~/Actions';

// Type definition --

const UNANSWERED = 'UNANSWERED';
const ANSWERED = 'ANSWERED';

type Unanswered = Readonly<{
    kind: typeof UNANSWERED;

    text: string;
    answers: Array<string>;
    correctAnswer: number;
}>;

type Answered = Omit<Unanswered, 'kind'> &
    Readonly<{
        kind: typeof ANSWERED;

        selectedAnswer: number;
    }>;

export type Question = Unanswered | Answered;

// -- Public API --

export function isAnsweredCorrectly(question: Question): boolean {
    return true;
}

// -- Private helpers --

function _isSelectedAnswer(answer: string, question: Question): boolean {
    return false;
}

// -- View --

interface Props {
    question: Question;
    actions: Pick<Actions, 'fpAnswerQuestion'>;
}

export const View = ({ question, actions }: Props) => (
    <div className="question">
        <div className="question-text">{question.text}</div>
        <div className="question-answers">
            {question.answers.map((answer, i) => (
                <div
                    key={i}
                    className={`question-answer ${
                        _isSelectedAnswer(answer, question) ? 'selected' : ''
                    }`}
                    onClick={() => actions.fpAnswerQuestion(i)}
                >
                    {answer}
                </div>
            ))}
        </div>
    </div>
);
