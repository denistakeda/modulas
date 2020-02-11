export default class Question {
    public readonly text: string;
    public readonly answers: Array<string>;
    private readonly correctAnswer: number;
    private readonly selectedAnswer?: number;

    public constructor(
        text: string,
        answers: Array<string>,
        correctAnswer: number,
        selectedAnswer?: number
    ) {
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.selectedAnswer = selectedAnswer;
    }

    public answer(n: number) {
        if (n >= this.answers.length)
            throw new Error(`There is no answers with number ${n}`);

        return new Question(this.text, this.answers, this.correctAnswer, n);
    }

    public isSelectedAnswer(n: number) {
        return n == this.selectedAnswer;
    }
}
