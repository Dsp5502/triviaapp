import { renderLoading } from '../loading/loading';
import { renderHome } from './views/home';

/***
 * @param {HTMLDivElement} element
 */
export const triviaApp = async (element) => {
  renderLoading(element);
  element.innerHTML = '';
  renderHome(element);
};
