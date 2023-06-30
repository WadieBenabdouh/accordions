let accordionOpener = document.querySelector("#btn");
let wrapperOne = document.querySelector("#wrapper");

accordionOpener.onclick = () => {
  wrapperOne.classList.toggle("is-open");
};
