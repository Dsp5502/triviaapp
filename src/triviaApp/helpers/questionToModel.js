import { Question } from '../models/questions';

export const questionToModel = (question) => {
  const {
    category,
    type,
    difficulty,
    question: questionText,
    correct_answer,
    incorrect_answers,
  } = question;

  return new Question({
    category,
    type,
    difficulty,
    question: questionText,
    correctaAnswer: correct_answer,
    incorrectAnswers: incorrect_answers,
  });
};
