import { navContainer } from "../utils/selectors.js";
import { renderPies, renderPieForm } from "../components/index.js";
import { renderToDom } from "../utils/utility.js";

const navEvents = () => {
  navContainer.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "Home":
        return renderToDom("#pies", `<h1>Welcome!</h1>`);
      case "Add":
        return renderPieForm();
      case "navContainer":
        return;
      default:
        return renderPies(e.target.id);
    }
  });
};

export default navEvents;
