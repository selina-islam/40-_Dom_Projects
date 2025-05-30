/* 
Project Requirements:
Change the background color by generating random rgb color by clicking a button
*/

// step-1 - create onload function
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}
// step-2  - random color generator functions
function generateRGBColor() {
  // rgb(0, 0,0) rgb(255, 255, 255)
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${blue}, ${green})`;
}
// step-3  - collect all necessary reference
// step-4  - handle the click event
