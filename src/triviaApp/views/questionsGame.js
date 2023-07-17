/**
 *
 * @param {HTMLElement} element
 * @param {Question[]} questions
 */

import { renderResult } from './resultGame';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let currentQuestionIndex = 0;
let score = 0;

export const renderQuestions = (element, questions) => {
  const { question, incorrectAnswers, correctaAnswer, type } =
    questions[currentQuestionIndex];

  const allAnswers =
    type === 'boolean'
      ? ['True', 'False']
      : shuffleArray([...incorrectAnswers, correctaAnswer]);
  element.innerHTML = `
    <div class='h-2/3 text-white w-11/12 lg:w-2/6 flex flex-col items-center justify-center mx-auto p-5  rounded-tl-lg rounded-br-lg   shadow-xl shadow-black transition-shadow '>
    <div class=' text-center text-2xl'>
        <h2 class=" font-bold text-4xl text-center gradient-text">
        Score: ${score}
        </h2>
        <hr class="my-5 border-2 border-slate-100 w-full">
    </div>
      <h1 class='font-bold text-4xl text-center gradient-text '>
        ${question}
      </h1>
        <div class='my-10 text-center text-2xl'>
             ${allAnswers
               .map(
                 (answer) =>
                   `<p class="option my-5 bg-steel-gray-400 border-2 border-slate-100 text-center text-2xl text-white rounded-lg py-2 px-3 cursor-pointer shadow-xl hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400
                   ">${answer}</p>`
               )
               .join('')}
        </div>
     
        <p class='mt-5 text-center text-xl font-bold border-2 border-slate-100 w-full text-orange-400  rounded-tl-lg rounded-br-lg  px-3 py-2 shadow-xl  '>
        <span class='gradient-text'>
         ${currentQuestionIndex + 1} / ${questions.length}
        </span>
      </p>
    </div>
    `;

  const optionsContainer = element.querySelector('.my-10');
  optionsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('option')) {
      // evaluar si  la respuesta es correcta
      const selectedAnswer = event.target.textContent;
      if (selectedAnswer === correctaAnswer) score += 100;
      nextQuestion();
    }
  });

  const nextQuestion = () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      renderQuestions(element, questions);
    } else {
      renderResult(element, score);
      currentQuestionIndex = 0;
      score = 0;
    }
  };
};
