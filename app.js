/** @format */

//varibabler i Gloval scope
const tupeDropdown = document.querySelector("#type-data");
const colorDropdown = document.querySelector("#color-data");
const statisticsContainer = document.querySelector("#data-form");
const addform = document.querySelector("#add-form");

//Deklarera save-Knappen globalt
let saveButton = document.querySelector("#save-monster");
if (!saveButton) {
  saveButton = document.createElement("button");
  saveButton.id = "save-monster";
  saveButton.textContent = "Save Monster";
  document.querySelector("#add-form").appendChild(saveButton);
  saveButton.style.display = "none";
}

//Deklarera cancel-knpane globalt
let cancelButton = document.querySelector("#cancel-monster");
if (!cancelButton) {
  cancelButton = document.createElement("button");
  cancelButton.id = "cancel-edit";
  cancelButton.textContent = "Cancel";
  document.querySelector("#add-form").appendChild(cancelButton);
  cancelButton.style.display = "none";
}

let typeCountDisplay = statisticsContainer.querySelector(".type-display");
let colorCountDisplay = statisticsContainer.querySelector(".color-display");

const typeOptions = ["Maritime Monster", "Terrestrial Beast", "Winged Horror"];
const colorOptions = ["Blue", "Green", "Yellow", "Pink", "Red"];

// ändra denna för att kunna ändra på utseendealternativen
const looks = ["size", "eyes", "viciousness", "head"];
const fields = ["type", "name", "color"];
fields.push(...looks);

//funktioner i Global scope

