let popup = document.querySelector(".gemini-popup");
let closeButton = popup.querySelector(".closee");

function openPopup() {
  popup.style.display = "block";
  console.log(popup);
}
function closePopup() {
  popup.style.display = "none";
}
closeButton.addEventListener("click", function () {
  closePopup();
});

window.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopup();
  }
});

let triggerButton = document.querySelector(".gemini");
if (triggerButton) {
  console.log("dipu");
  triggerButton.addEventListener("click", function () {
    openPopup();
  });
}

// Api fetching




import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyD6nKi0B1JiSFOAEF2nhtop6acJxtdDUdQ";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
document.querySelector(".submit-button").addEventListener("click", run);

// console.log(genAI);

async function run() {
  // alert("fun run");
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let userInput = document.querySelector(".textar").value;
  let userMesageDisplayDiv = document.createElement("div");
  userMesageDisplayDiv.className = "user-msg";
  userMesageDisplayDiv.textContent = `User: ${userInput}`;
  document.querySelector(".auto-gen").appendChild(userMesageDisplayDiv);

  const prompt = userInput;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  

  let botmessagediv = document.createElement("div");
  
  botmessagediv.innerHTML = "";

  botmessagediv.className = "bot-msg";
  let plainText = text
  .replace(/\*\*(.*?)\*\*/g, "$1")
  .replace(/\*(.*?)\*/g, "$1");
  console.log(plainText);


  botmessagediv.textContent = `Gemini:- ${plainText}`;

  document.querySelector(".auto-gen").appendChild(botmessagediv);
}
