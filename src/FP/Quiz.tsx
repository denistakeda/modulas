import * as React from 'react';

import { Question, default as QuestionM } from '~/FP/Question';
import { FPActions } from '~/Actions';

// -- Type definition --

const ACTIVE = 'ACTIVE';
const SCORED = 'SCORED';

type Active = Readonly<{
    kind: typeof ACTIVE;

    prevL: Array<Question>;
    current: Question;
    nextL: Array<Question>;
}>;

type Score = [number, number];

type Scored = Readonly<{
    kind: typeof SCORED;

    score: Score;
}>;

export type Quiz = Active | Scored;

// -- Public API --

export function init([first, ...rest]: [Question, ...Question[]]): Quiz {
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

function _toArray({ prevL, current, nextL }: Active): Array<Question> {
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
        (s: number, q: Question) =>
            QuestionM.isAnsweredCorrectly(q) ? s + 1 : s,
        0
    );
    return [score, questions.length];
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
    return <div className="quiz">Quiz</div>;
}

function renderScore(quiz: Scored) {
    return <div className="score">Score</div>;
}
