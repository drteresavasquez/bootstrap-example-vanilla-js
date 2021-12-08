import { renderDetails, renderPies } from "../components/index.js";
import { pieContainer } from "../utils/selectors.js";
import { pies } from "./../utils/pieData.js";

const removePie = (id) => {
  const pieObj = (el) => el.id === Number(id);
  const instructor = pies.find(pieObj).instructor;
  const index = pies.findIndex(pieObj);
  pies.splice(index, 1);
  renderPies(instructor);
};

const cardEvents = () => {
  pieContainer.addEventListener("click", (e) => {
    const [, id] = e.target.id.split("--");

    e.target.id.includes("details") && renderDetails(id);
    e.target.id.includes("delete") && removePie(id);
  });
};

export default cardEvents;
