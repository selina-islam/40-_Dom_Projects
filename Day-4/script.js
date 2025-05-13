/* 
Project Requirements:
-Change the background color by generating random hex color by clicking a button
-Also display the hex code to a disabled input field
-Add a button to copy the color code
- Add a toast message when copied
*/

// globals
let div = null;

// step-1 - create onload function
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMessage(`${output.value} copied`);
  });
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


function generateToastMessage(msg) {
   div= document.createElement('div')
  div.innerText = msg
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener('click', function () {
    div.classList.remove
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  })
  
  
  document.body.appendChild(div)
}
// step-3  - collect all necessary reference

// step-4  - handle the click event

// step-5  - handle the copy button click event

// step-6  -- activate toast message

// step-7  -crete a dynamic toast message

// step-8  - clear toast message
