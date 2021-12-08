import { pies } from "../utils/pieData.js";
import { renderToDom } from "../utils/utility.js";

// Pie Cards
const renderPies = (targetId) => {
  let domString = "";
  pies
    .filter((p) => p.instructor === targetId)
    .forEach((pie) => {
      domString += `
      <div>
        <img src=${pie.imageUrl} alt=${pie.name}>
        <p>${pie.name}</p>
        <button id="details--${pie.id}">Details</button>
        <button id="delete--${pie.id}">Delete</button>
      </div>`;
    });

  renderToDom("#pies", domString);
};

export default renderPies;
