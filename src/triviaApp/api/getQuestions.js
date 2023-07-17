import axios from 'axios';
import { questionToModel } from '../helpers/questionToModel';

export const getQuestions = async (category, difficulty, type) => {
  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`
    );
    const questions = data.results.map(questionToModel);
    console.log('questions', questions);

    return questions;
  } catch (error) {
    console.error('Error obteniendo preguntas:', error);
  }
};
