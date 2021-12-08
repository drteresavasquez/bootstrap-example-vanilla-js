import { renderToDom } from "../utils/utility.js";

// Site Navigation
const renderNavigation = () => {
  const domString = `
    <a href="#" id="Home">Home</a>
    <a href="#" id="Trinity">Trinity</a>
    <a href="#" id="Aja">Aja</a>
    <a href="#" id="Doc">Doc</a>
    <a href="#" id="Add">+ Add</a>`;

  renderToDom("#navContainer", domString);
};

export default renderNavigation;
