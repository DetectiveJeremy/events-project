//Establishing variables for the buttons.
let Aqua = document.getElementById("aqua");
let Teal = document.getElementById("teal");
let Pink = document.getElementById("pink");
let Purple = document.getElementById("purple");
let Colorless = document.getElementById("colorless");
//Selecting the text
let header1Text = document.querySelector("h1");
// Variable for color display
let Display = document.getElementById("color-display");
//Changing the color to aqua
Aqua.addEventListener("click", () => { 
    // Changing the background inside the border
Display.style.backgroundColor = "aqua"
Display.textContent = "Aqua"

});
Teal.addEventListener("click", () => { 
    // Changing the background inside the border
Display.style.backgroundColor = "teal";
Display.textContent = "Teal";

});
Pink.addEventListener("click", () => { 
    // Changing the background inside the border
Display.style.backgroundColor = "pink";
Display.textContent = "Pink";

});
Purple.addEventListener("click", () => { 
    // Changing the background inside the border
Display.style.backgroundColor = "purple";
Display.textContent = "Purple";

});

Colorless.addEventListener("click", () => {
    // Reset
    Display.style.backgroundColor = "white";
    Display.textContent = "colorless";
});