import "../styles/style.css";
import { DOM } from "./DOM";
import { items } from "./items";
DOM.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    DOM.themebtn.textContent = "Night Theme";
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    DOM.themebtn.textContent = "Morning Theme";
  }
});
function createItem(name, price, image) {
  DOM.items.insertAdjacentHTML(
    "afterbegin",
    `<div class="item"> <h3> ${name} </h3> <img id="img" src="${image}" alt="An image of ${name}" /> <p id="price">Price: $${price}</p> <button id="purchaseBtn">Purchase</button></div>`
  );
}
function categoryFilter(category) {
  DOM.items.innerHTML = "";
  const filtered = items.filter((item) =>
    item.categories.includes(`${category}`)
  );
  filtered.forEach((item) => createItem(item.name, item.price, item.image));
}
items.forEach((item) => createItem(item.name, item.price, item.image));
DOM.lowPriceFilter.addEventListener("click", function () {
  DOM.items.innerHTML = "";
  const filtered = items.filter((item) => item.price < 30);
  filtered.forEach((item) => createItem(item.name, item.price, item.image));
});
DOM.highPriceFilter.addEventListener("click", function () {
  DOM.items.innerHTML = "";
  const filtered = items.filter((item) => item.price > 100);
  filtered.forEach((item) => createItem(item.name, item.price, item.image));
});
DOM.aberrationFilter.addEventListener("click", function () {
  categoryFilter("aberration");
});
DOM.beastFilter.addEventListener("click", function () {
  categoryFilter("beast");
});
DOM.pokemonFilter.addEventListener("click", function () {
  categoryFilter("pokemon");
});
DOM.undeadFilter.addEventListener("click", function () {
  categoryFilter("undead");
});
DOM.dragonFilter.addEventListener("click", function () {
  categoryFilter("dragon");
});
DOM.singingFilter.addEventListener("click", function () {
  categoryFilter("singing");
});
DOM.waterFilter.addEventListener("click", function () {
  categoryFilter("water");
});
DOM.iceFilter.addEventListener("click", function () {
  categoryFilter("ice");
});
DOM.resetButton.addEventListener("click", function () {
  DOM.items.innerHTML = "";
  items.forEach((item) => createItem(item.name, item.price, item.image));
});
