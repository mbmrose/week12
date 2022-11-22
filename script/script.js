const clickMeButton = document.querySelector(".click_me");


function clickButton(){
console.log(clickMeButton);
alert("Button Clicked")
}


clickMeButton.addEventListener("click", clickButton)
