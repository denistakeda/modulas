import Question from '~/OOP/Question';

export default class Quiz {
    private readonly prevL: Array<Question>;
    private readonly current: Question;
    private readonly nextL: Array<Question>;
    private readonly l: number;
    private readonly finished: boolean;

    private constructor(
        prevL: Array<Question>,
        current: Question,
        nextL: Array<Question>,
        finished = false
    ) {
        this.prevL = prevL;
        this.current = current;
        this.nextL = nextL;
        this.l = prevL.length + 1 + nextL.length;
        this.finished = finished;
    }

    public static init(list: Array<Question>): Quiz {
        if (list.length < 1)
            throw new Error(
                'Illegal argument. The list should be at least 1 element long'
            );

        const [first, ...next] = list;
        return new Quiz([], first, next);
    }

    public getCurrent(): Question {
        return this.current;
    }

    public currentNumber(): number {
        return this.prevL.length;
    }

    public hasNext(): boolean {
        return this.nextL.length != 0;
    }

    public next(): Quiz {
        if (!this.hasNext()) return this;

        return this.gotoNth(this.prevL.length + 1);
    }

    public hasPrevious(): boolean {
        return this.prevL.length != 0;
    }

    public previous(): Quiz {
        if (!this.hasPrevious()) return this;

        return this.gotoNth(this.prevL.length - 1);
    }

    public gotoNth(n: number) {
        if (this.prevL.length == n) return this;
        const lst = this.toArray();
        if (lst.length <= n)
            throw new Error(`There is no question with index ${n}`);

        const prevL = lst.slice(0, n);
        const current = lst[n];
        const nextL = lst.slice(n + 1, lst.length);
        return new Quiz(prevL, current, nextL);
    }

    public size(): number {
        return this.l;
    }

    public answerCurrentQuestion(n: number): Quiz {
        return new Quiz(this.prevL, this.current.answer(n), this.nextL);
    }

    public fullyAnswered(): boolean {
        for (const question of this.toArray()) {
            if (!question.isAnswered()) return false;
        }
        return true;
    }

    public finish(): Quiz {
        if (!this.fullyAnswered())
            throw new Error("It's not allowed to finish unanswered quiz");

        return new Quiz(this.prevL, this.current, this.nextL, true);
    }

    public isFinished(): boolean {
        return this.finished;
    }

    public getScore(): [number, number] {
        const questions = this.toArray();
        let score = 0;
        for (const question of questions) {
            if (question.isAnsweredCorrectly()) {
                score++;
            }
        }
        return [score, questions.length];
    }

    private toArray(): Array<Question> {
        return [...this.prevL, this.current, ...this.nextL];
    }
}
