/* 
Project Requirements:
Change the background color by generating random hex color by clicking a button
Also display the hex code to a disabled input field
*/

// step-1 - create onload function
window.onload = () => {
  main();
};

function main() {
        const root = document.getElementById("root");
        const btn = document.getElementById("change-btn");
        const output = document.getElementById('output');

        btn.addEventListener('click', function () {
                const bgColor = generateHexColor();
                root.style.backgroundColor = bgColor;
                output.value=bgColor
        })

       
         
 }

// step-2  - random color generator functions
function generateHexColor() {
  // #000000  #ffffff
  // 255, 255, 255 => #ffffff
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
        
  return ` #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// step-3  - collect all necessary reference

// step-4  - handle the click event
