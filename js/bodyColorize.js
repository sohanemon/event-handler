const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const slate = document.getElementById("slate");
const heading = document.getElementById("heading");
green.onclick = () => {
  document.body.removeAttribute("class");
  document.body.classList.add("bg-green-400");
  heading.style.color = "green";
};
red.onclick = () => {
  document.body.removeAttribute("class");
  document.body.classList.add("bg-red-400");
  heading.style.color = "red";
};
blue.onclick = () => {
  document.body.removeAttribute("class");
  document.body.classList.add("bg-blue-400");
  heading.style.color = "blue";
};
orange.onclick = () => {
  document.body.removeAttribute("class");
  document.body.classList.add("bg-orange-400");
  heading.style.color = "pink";
};
slate.onclick = () => {
  document.body.removeAttribute("class");
  document.body.classList.add("bg-slate-400");
  heading.style.color = "gray";
};
