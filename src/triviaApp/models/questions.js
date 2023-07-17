export class Question {
  /**
   * @param {Like<Question> }
   */

  constructor({
    category,
    type,
    difficulty,
    question,
    correctaAnswer,
    incorrectAnswers,
  }) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correctaAnswer = correctaAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}
