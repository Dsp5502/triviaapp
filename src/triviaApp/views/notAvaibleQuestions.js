import { renderLoading } from '../../loading/loading';
import { renderCreateGame } from './createGame';

export const notAvaibleQuestions = (element) => {
  element.innerHTML = `
        <div class='h-2/3 w-5/6 lg:w-2/6  text-white flex flex-col items-center justify-center   mx-auto p-5  rounded-tl-lg rounded-br-lg   shadow-xl shadow-black transition-shadow'>
            <h1 class='font-bold text-4xl text-center gradient-text'>
                No questions available
            </h1>
            <button id="begin" class='font-bold my-10 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400'>    
            Back
            </button>
        </div>
    `;
  const begin = document.querySelector('#begin');
  begin.addEventListener('click', () => {
    element.innerHTML = '';
    renderLoading(element);
    renderCreateGame(element);
  });
  return;
};
