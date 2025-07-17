// Change the Linux logo when clicked:
//      load the information about the first image (img) in the container "myImage"
const myImage = document.querySelector("img");

//      when the image (myImage) is clicked it runs an "if" condition to change the image
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/linux logo.svg") {
    myImage.setAttribute("src", "images/linux logo2.svg");
  } else {
    myImage.setAttribute("src", "images/linux logo.svg");
  }
});

// Add a personalized title when button clicked
//      load the information of the button and the title (Heading)
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//      create a function that ask the name
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    myHeading.textContent = "Comment installer Linux à côté de windows"
  } else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cher ${myName} le kiki poilu, voici comment installer Linux à côté de Windows`;
  }
}

//      Set the personalized title (with the name)
if (!localStorage.getItem("name")) {
//   setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cher ${storedName} le kiki poilu, voici comment installer Linux à côté de Windows`;
}

//      reask the name if user change
myButton.addEventListener("click", () => {
  setUserName();
});
