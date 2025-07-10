let chevronDown = document.getElementById("chevron-down");
let chevronUp = document.getElementById("chevron-up");
let dropdown = document.getElementById("dropdown");
let lang = document.getElementById("lang");
let isVisible = false;

function toggleDropdown() {
  if (isVisible == false) {
    isVisible = true;
    dropdown.style.display = "block";
    chevronDown.style.display = "block";
    chevronUp.style.display = "none";
  } else {
    isVisible = false;
    dropdown.style.display = "none";
    chevronDown.style.display = "none";
    chevronUp.style.display = "block";
  }
}

function switchLang(langCode) {
  lang.innerHTML = langCode;
}
