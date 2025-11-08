const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bond.jpg") {
        myImage.setAttribute("src", "images/bond2.jpg");
    } else {
        myImage.setAttribute("src", "images/bond.jpg")
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}さん、Bondはかっこいいよ。`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bond はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}