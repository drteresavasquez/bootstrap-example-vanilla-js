import { pies } from "../utils/pieData.js";
import { renderToDom } from "../utils/utility.js";

// Details Card
const renderDetails = (targetId) => {
  const thisPie = pies.find((p) => p.id === Number(targetId));
  const domString = `
    <h1>${thisPie.name}</h1>
    <h1>${thisPie.ingredients}</h1>
    <h1>${thisPie.bakeTemp}</h1>
    <h1>${thisPie.drinkPairing}</h1>
    <h1>${thisPie.imageUrl}</h1>
    <h1>${thisPie.iceCream}</h1>
  `;

  renderToDom("#pies", domString);
};

export default renderDetails;
