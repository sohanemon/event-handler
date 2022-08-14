/* --------------------------------------------------------------------- */
/*                 changing body bg with addEventListener                */
/* --------------------------------------------------------------------- */

const hoverGreen = document.getElementById("hgreen");
const hoverRed = document.getElementById("hred");
const hoverBlue = document.getElementById("hblue");
const hoverOrange = document.getElementById("horange");
const hoverSlate = document.getElementById("hslate");
const heading2 = document.getElementById("heading2");
const body = document.body;
hoverGreen.addEventListener("mouseover", () => {
  body.removeAttribute("class");
  body.classList.add("bg-green-300");
  heading2.style.color = "green";
});
hoverGreen.addEventListener("mouseout", () => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-200");
  heading2.style.color = null;
});
hoverRed.addEventListener("mouseover", () => {
  body.removeAttribute("class");
  body.classList.add("bg-red-300");
  heading2.style.color = "red";
});
hoverRed.addEventListener("mouseout", () => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-200");
  heading2.style.color = null;
});
hoverOrange.addEventListener("mouseover", () => {
  body.removeAttribute("class");
  body.classList.add("bg-orange-300");
  heading2.style.color = "pink";
});
hoverOrange.addEventListener("mouseout", () => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-200");
  heading2.style.color = null;
});
hoverBlue.addEventListener("mouseover", () => {
  body.removeAttribute("class");
  body.classList.add("bg-blue-300");
  heading2.style.color = "lightblue";
});
hoverBlue.addEventListener("mouseout", () => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-200");
  heading2.style.color = null;
});
hoverSlate.addEventListener("mouseover", (e) => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-300");
  heading2.style.color = "gray";
});
hoverSlate.addEventListener("mouseout", () => {
  body.removeAttribute("class");
  body.classList.add("bg-slate-200");
  heading2.style.color = null;
});
