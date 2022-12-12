import "../styles/style.css";
import { DOM } from "./DOM";
DOM.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    DOM.themebtn.textContent = "Cool Theme";
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    DOM.themebtn.textContent = "Warm Theme";
  }
});
function createItems(name, price, image) {
  DOM.items.insertAdjacentHTML("afterbegin", "");
}
