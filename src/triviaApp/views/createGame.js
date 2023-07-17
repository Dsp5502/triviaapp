import axios from 'axios';
import { renderLoading } from '../../loading/loading';
import { renderQuestions } from './questionsGame';
import { getQuestions } from '../api/getQuestions';
import { notAvaibleQuestions } from './notAvaibleQuestions';

const getCategories = async () => {
  try {
    const response = await axios.get('https://opentdb.com/api_category.php');
    return response.data.trivia_categories;
  } catch (error) {
    console.error('Error obteniendo categorías:', error);
  }
};

const addToSelect = (categories) => {
  const selectElement = document.getElementById('category');
  categories.forEach((category) => {
    const optionElement = document.createElement('option');
    optionElement.value = category.id;
    optionElement.text = category.name;
    selectElement.add(optionElement);
  });
};

export const renderCreateGame = async (element) => {
  const categories = await getCategories();
  element.innerHTML = `
    <div class='h-2/3 w-5/6 lg:w-2/6  text-white flex flex-col items-center justify-center mx-auto p-5  rounded-tl-lg rounded-br-lg shadow-xl shadow-black transition-shadow'>
        <h1 class='font-bold text-4xl text-center gradient-text'>
            Choose a category
        </h1>
        <div class='my-10 text-center text-2xl'>
            <select id="category" class="w-full mx-auto bg-steel-gray-400 border-2 border-slate-100 text-center text-2xl text-white rounded-lg py-2 px-3 shadow-xl">
               
            </select>
        </div>
        <h1 class='font-bold text-4xl text-center gradient-text'>
            Choose a type of game
        </h1>
        <div class='my-10 text-center text-2xl'>
            <select id="type" class="w-full mx-auto bg-steel-gray-400 border-2 border-slate-100 text-center text-2xl text-white rounded-lg py-2 px-3 shadow-xl">
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </select>
        </div>
        <h1 class='font-bold text-4xl text-center gradient-text'>
            Choose a difficulty
        </h1>
        <div class='my-10 text-center text-2xl'>
            <select id="difficulty" class="w-full mx-auto bg-steel-gray-400 border-2 border-slate-100 text-center text-2xl text-white rounded-lg py-2 px-3 shadow-xl">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <a class='w-full' >
            <button id="create" class='font-bold my-10 bg-gradient-to-r  from-red-500 to-orange-400 w-full py-2 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-100 hover:text-orange-400'>    
            Create
            </button>
        </a>
    </div>
  `;
  addToSelect(categories);
  const create = document.getElementById('create');
  create.addEventListener('click', async () => {
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const type = document.getElementById('type').value;
    renderLoading(element);
    const questionsGame = await getQuestions(category, difficulty, type);
    if (questionsGame.length === 0) {
      notAvaibleQuestions(element);
      return;
    }
    element.innerHTML = '';
    renderQuestions(element, questionsGame);
  });
};
