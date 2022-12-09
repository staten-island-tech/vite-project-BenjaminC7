import "../styles/style.css";
document.querySelector("#cool").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
document.querySelector("#warm").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
  }
});
