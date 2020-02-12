import * as React from 'react';

import * as QuestionM from '~/FP/Question';
import { FPActions } from '~/Actions';

// -- Type definition --

const ACTIVE = 'ACTIVE';
const SCORED = 'SCORED';

type Active = Readonly<{
    kind: typeof ACTIVE;

    prevL: Array<QuestionM.Question>;
    current: QuestionM.Question;
    nextL: Array<QuestionM.Question>;
}>;

type Score = [number, number];

type Scored = Readonly<{
    kind: typeof SCORED;

    score: Score;
}>;

export type Quiz = Active | Scored;

// -- Public API --

export function init([first, ...rest]: [
    QuestionM.Question,
    ...QuestionM.Question[]
]): Quiz {
    return {
        kind: ACTIVE,
        prevL: [],
        current: first,
        nextL: rest,
    };
}

export function next(quiz: Quiz): Quiz {
    switch (quiz.kind) {
        case ACTIVE:
            return _hasNext(quiz)
                ? _gotoNth(quiz.prevL.length + 1, quiz)
                : quiz;

        case SCORED:
            // It doesn't make sense to go anywhere in scored state
            return quiz;
    }
}

export function previous(quiz: Quiz): Quiz {
    switch (quiz.kind) {
        case ACTIVE:
            return _hasPrevious(quiz)
                ? _gotoNth(quiz.prevL.length - 1, quiz)
                : quiz;

        case SCORED:
            // It doesn't make sense to go anywhere in scored state
            return quiz;
    }
}

export function gotoNth(n: number, quiz: Quiz): Quiz {
    switch (quiz.kind) {
        case ACTIVE:
            return _gotoNth(n, quiz);
        case SCORED:
            // It doesn't make sense to go anywhere in scored state
            return quiz;
    }
}

export function finish(quiz: Quiz): Quiz {
    switch (quiz.kind) {
        case ACTIVE:
            // Here we have to do a transition ACTIVE -> SCORED
            return { kind: SCORED, score: _score(quiz) };
        case SCORED:
            return quiz;
    }
}

export function answerCurrentQuestion(n: number, quiz: Quiz): Quiz {
    switch (quiz.kind) {
        case ACTIVE:
            return _answerCurrentQuestion(n, quiz);
        case SCORED:
            // It doesn't make sense to answer already scored quiz
            return quiz;
    }
}

// -- Private helpers --

function _gotoNth(n: number, quiz: Active): Active {
    // If we are asked to go somewhere, but we already there
    if (quiz.prevL.length == n) return quiz;

    const lst = _toArray(quiz);
    if (lst.length <= n)
        throw new Error(`There is no question with index ${n}`);

    const prevL = lst.slice(0, n);
    const current = lst[n];
    const nextL = lst.slice(n + 1, lst.length);
    return { kind: ACTIVE, prevL, current, nextL };
}

function _toArray({
    prevL,
    current,
    nextL,
}: Active): Array<QuestionM.Question> {
    return [...prevL, current, ...nextL];
}

function _hasNext({ nextL }: Active): boolean {
    return nextL.length != 0;
}

function _hasPrevious({ prevL }: Active): boolean {
    return prevL.length != 0;
}

function _score(quiz: Active): Score {
    const questions = _toArray(quiz);
    const score = questions.reduce(
        (s: number, q: QuestionM.Question) =>
            QuestionM.isAnsweredCorrectly(q) ? s + 1 : s,
        0
    );
    return [score, questions.length];
}

function _answerCurrentQuestion(n: number, quiz: Active): Active {
    return {
        ...quiz,
        current: QuestionM.answer(n, quiz.current),
    };
}

function _fullyAnswered(quiz: Quiz): boolean {
    switch (quiz.kind) {
        case ACTIVE:
            return _toArray(quiz).every(QuestionM.isAnswered);
        case SCORED:
            return true;
    }
}

function _size(quiz: Active): number {
    return quiz.prevL.length + 1 + quiz.nextL.length;
}

function _currentNumber(quiz: Active): number {
    return quiz.prevL.length;
}

// -- View --

interface Props {
    quiz: Quiz;
    actions: FPActions;
}

export const View = ({ quiz, actions }: Props) => {
    switch (quiz.kind) {
        case ACTIVE:
            return renderQuiz(quiz, actions);
        case SCORED:
            return renderScore(quiz);
    }
};

function renderQuiz(quiz: Active, actions: FPActions) {
    return (
        <div className="quiz">
            <div className="quiz-navigation">
                <button
                    onClick={actions.fpPreviousQuestion}
                    disabled={!_hasPrevious(quiz)}
                >
                    {'<<'}
                </button>

                {renderIndexes(quiz, actions.fpGotoQuestion)}

                <button
                    onClick={actions.fpNextQuestion}
                    disabled={!_hasNext(quiz)}
                >
                    {'>>'}
                </button>
            </div>
            {_fullyAnswered(quiz) && (
                <button
                    className="finish-button"
                    onClick={actions.fpFinishQuiz}
                >
                    Finish
                </button>
            )}
            <QuestionM.View
                question={quiz.current}
                actions={{ fpAnswerQuestion: actions.fpAnswerQuestion }}
            />
        </div>
    );
}

function renderScore(quiz: Scored) {
    return <div className="score">Score</div>;
}

function renderIndexes(quiz: Active, gotoQuestion: (n: number) => void) {
    const currentNumber = _currentNumber(quiz);
    let list = [];
    for (let i = 0; i < _size(quiz); i++) {
        list.push(
            <div
                className={`quiz-navigation-item ${
                    i == currentNumber ? 'selected' : ''
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
