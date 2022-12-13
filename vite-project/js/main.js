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
function createItem(name, price, image) {
  DOM.items.insertAdjacentHTML(
    "afterbegin",
    `<div class="item"> <h3> ${name} </h3> <img id="img" src="${image}" alt="An image of ${name}" /> <p id="price">Price: $${price}</p> <button id="purchaseBtn">Purchase</button></div>`
  );
}
