const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

generateBtn.addEventListener("click", function () {

    let text = userInput.value.trim();

    if (text === "") {
        alert("Please enter your idea first.");
        return;
    }

    output.innerHTML = "⏳ Generating AI Prompt...";

    setTimeout(function () {

        output.innerHTML =
        "Create a modern and professional project based on:<br><br><b>" +
        text +
        "</b><br><br>Use attractive UI, responsive design, HTML, CSS, JavaScript, jQuery and AI integration.";

    }, 2000);

});

/*$(document).ready(function () {

    $("h1").click(function () {

        alert("Welcome to PromptCraft AI!");

    });

});*/

