import { formSubmit } from "../events/index.js";
import { renderToDom } from "../utils/utility.js";

// Pie Form
const renderPieForm = () => {
  let domString = `
    <h1>Create Pie</h1>
    <form id="createPie">
      <input id="name" type="text" placeholder="Pie Name" required></input>
      <input id="ingredients" type="text" placeholder="Ingredients" required></input>
      <input id="bakeTemp" type="number" placeholder="Bake Temp" required></input>
      <input id="drinkPairing" type="text" placeholder="Drink Pairing" required></input>
      <input id="imageUrl" type="url" placeholder="Image URL" required></input>
      <input id="iceCream" type="text" placeholder="Ice Cream Pairing" required></input>
      <select id="instructor" required>
        <option value="">Select</option>
        <option>Trinity</option>
        <option>Aja</option>
        <option>Doc</option>
      </select>
      <button type="submit">Add Pie</button>
    </form>
  `;

  renderToDom("#pies", domString);
  formSubmit();
};

export default renderPieForm;
