import { renderNavigation } from "./components/index.js";
import { navEvents, cardEvents } from "./events/index.js";
import { renderToDom } from "./utils/utility.js";

(() => {
  renderNavigation();
  renderToDom("#pies", `<h1>Welcome!</h1>`);
  navEvents();
  cardEvents();
})();
