import { renderLoading } from '../../loading/loading';
import { renderCreateGame } from './createGame';

export const renderResult = (element, score) => {
  element.innerHTML = `
    <div class='h-2/3 text-white w-11/12 lg:w-2/6 flex flex-col items-center justify-center mx-auto mb-5 p-5  rounded-tl-lg rounded-br-lg   shadow-xl shadow-black transition-shadow '>
        <h1 class='font-bold text-4xl text-center gradient-text '>
            Your score is: ${score}
        </h1>
        <a class='w-full' to='/'>
            <button id="create" class='font-bold my-10 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400'>
                Try Again
            </button>
        </a>
    </div>
    `;

  const create = document.getElementById('create');
  create.addEventListener('click', () => {
    element.innerHTML = '';
    renderLoading(element);
    renderCreateGame(element);
  });
};
