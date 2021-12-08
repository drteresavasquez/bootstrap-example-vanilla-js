import renderPies from "../components/pieCard.js";
import { pies } from "./../utils/pieData.js";

const formSubmit = () => {
  document.querySelector("#createPie").addEventListener("submit", (e) => {
    e.preventDefault();
    const newPie = {
      id: Math.max(...pies.map((p) => p.id)) + 1,
      name: document.querySelector("#name").value,
      ingredients: document.querySelector("#ingredients").value,
      bakeTemp: document.querySelector("#bakeTemp").value,
      drinkPairing: document.querySelector("#drinkPairing").value,
      imageUrl: document.querySelector("#imageUrl").value,
      instructor: document.querySelector("#instructor").value,
      iceCream: document.querySelector("#iceCream").value
    };
    pies.push(newPie);
    renderPies(newPie.instructor);
  });
};

export default formSubmit;
