//Shift + Option + F vscode 자동정렬기능

//image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1808152659.webp") {
        myImage.setAttribute("src", "images/Firefox-logo-no-text.jpg");

    } else {
        myImage.setAttribute("src", "images/1808152659.webp");
    }
};


//userName output?여튼
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool," + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}
