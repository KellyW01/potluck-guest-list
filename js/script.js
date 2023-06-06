// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button 'add guest'
const guestInputLabel = document.querySelector(".add-guest label");
// text input box (outline of box)
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const seeYouSat = document.querySelector("footer");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
      addToList(guest); //pass guest as an argument?
      clearInput(); //clears guest name from input box after click event
      updateGuestCount();
    }
  });

const clearInput = function () { //clears guest name function
  guestInput.value = ""; //changes input to blank
};

//refractor code: 

//function just for adding a guest to the list
const addToList = function (guest){
    const listItem = document.createElement("li"); //creates a list item, changed let to const now that function is scoped.
    listItem.innerText = guest; //changes inner text to guest name
    guestList.append(listItem); // adds guest name to guest list
};

//Update guest list number:
const updateGuestCount = function (){
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
//prevent list from going over 8 people
    if (guests.length ===8){
      //add the hide class to hide button and input areas
      guestInputLabel.classList.add("hide");
      addGuestButton.classList.add("hide");
      guestInput.classList.add("hide");
      //remove hide class to show list full message
      guestFull.classList.remove("hide");
      seeYouSat.classList.revove("hide");
      }
      else { //remove the hide class
      guestInputLabel.classList.remove("hide");
      addGuestButton.classList.remove("hide");
      guestInput.classList.remove("hide");
      }
};