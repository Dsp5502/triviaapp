import { renderLoading } from '../../loading/loading';
import { renderCreateGame } from './createGame';

export const renderHome = (element) => {
  element.innerHTML = `
     <div class='h-2/3 w-5/6 lg:w-2/6  text-white flex flex-col items-center justify-center mx-auto p-5 rounded-tl-lg rounded-br-lg   shadow-xl shadow-black transition-shadow'>
      <h1 class='font-bold text-4xl text-center gradient-text'>
         Welcome to the Trivia Challenge
      </h1>
      <div class='my-10 text-center text-2xl'>
        <img
          class='w-9/12 mx-auto'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1654968767/Trivia_challenge_slm6cq.png'
          alt='Img Logo'
        />

        <p class='mt-2'>
          Your knowledge will be tested by 10 questions
        </p>
      </div>
      <p class='mt-5 text-center text-xl font-bold border-2 border-slate-100 w-full text-orange-400  rounded-tl-lg rounded-br-lg  px-3 py-2 shadow-xl  '>
        <span class='gradient-text'>
        Can you score 100%?
        </span>
      </p>
      <a class='w-full'>
        <button id="begin" class='font-bold my-10 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400    '>
            Begin
        </button>
      </a>
    </div>
    `;

  const begin = document.querySelector('#begin');
  begin.addEventListener('click', () => {
    element.innerHTML = '';
    renderLoading(element);
    renderCreateGame(element);
  });
};
