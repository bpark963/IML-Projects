// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv0kvoe_FbE9EW29qN47pn6rE_G3h6oX0",
  authDomain: "pic-tutorial-intro-response.firebaseapp.com",
  projectId: "pic-tutorial-intro-response",
  storageBucket: "pic-tutorial-intro-response.appspot.com",
  messagingSenderId: "378568328546",
  appId: "1:378568328546:web:791db096464098d0bf983b",
  measurementId: "G-33NW3GMF0E",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");

dbRef.on("child_added", gotText);

function gotText(data) {
  let id = data.key;
  let value = data.val();
  console.log(value);
  chatContainer.innerHTML =
    "<div class='response'>" + value + "</div>" + chatContainer.innerHTML;

//   let divs = document.getElementsByClassName("response");
//   let winWidth = window.innerWidth;
//   let winHeight = window.innerHeight;

//   for (var i = 0; i < divs.length; i++) {
//     let thisDiv = divs[i];

//     let randomTop = getRandomNumber(0, winHeight);
//     let randomLeft = getRandomNumber(0, winWidth);

//     // update top and left position
//     thisDiv.style.top = randomTop + "px";
//     thisDiv.style.left = randomLeft + "px";
//   }
}

// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

//click button will run this function
const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value; //gets text value from textbox
  let newKey = dbRef.push().key; //ask firebase to give you a new key / 'name'
  let updates = {}; //send firebase list of values
  updates[newKey] = textToSubmit;
  dbRef.update(updates);
}

// function submitlock() {
//   // entry.remove();
//   share.value = "Thanks for telling me.";
//   share.disabled = true;
//   share.style.width = "70%";
// }
