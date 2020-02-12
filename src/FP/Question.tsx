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

export function init(
    text: string,
    answers: Array<string>,
    correctAnswer: number
): Question {
    if (correctAnswer >= answers.length)
        throw new Error(
            `There are only ${answers.length}, number ${correctAnswer} can't be valid answer`
        );
    return {
        kind: UNANSWERED,
        text,
        answers,
        correctAnswer,
    };
}

export function isAnsweredCorrectly(question: Question): boolean {
    switch (question.kind) {
        case UNANSWERED:
            return false;
        case ANSWERED:
            return question.correctAnswer == question.selectedAnswer;
    }
}

export function isAnswered(question: Question): boolean {
    return question.kind == ANSWERED;
}

export function answer(n: number, question: Question): Question {
    switch (question.kind) {
        case UNANSWERED: {
            if (n >= question.answers.length)
                throw new Error(
                    `There are only ${question.answers.length} answers. You can't select question number ${n}`
                );
            return { ...question, kind: ANSWERED, selectedAnswer: n };
        }
        case ANSWERED:
            return question;
    }
}

// -- Private helpers --

function _getSelectedAnswer(question: Answered): string {
    return question.answers[question.selectedAnswer];
}

function _isSelectedAnswer(answer: string, question: Question): boolean {
    switch (question.kind) {
        case UNANSWERED:
            return false;
        case ANSWERED:
            return answer == _getSelectedAnswer(question);
    }
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
