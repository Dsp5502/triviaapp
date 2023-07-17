import './style.css';

import { triviaApp } from './src/triviaApp/trivia-app';

document.querySelector('#app').innerHTML = `
  <div id="screenStep" class="w-full "></div>
`;

const element = document.querySelector('#screenStep');

triviaApp(element);
