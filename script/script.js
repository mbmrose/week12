const clickMeButton = document.querySelector(".click_me");


function clickButton(){
console.log(clickMeButton);
alert("Button Clicked")
}

// Making ways to only alert the event listener once

// Option 1:
// clickMeButton.addEventListener("click", function clickButton()
// {
//     alert("You Clicked");
//     clickMeButton.removeEventListener("click", clickButton);
// });

// Option 2:
// clickMeButton.addEventListener("click", clickButton, {once : true})

// Option 3:

// clickMeButton.addEventListener("click", function clickButton()
// {
//     alert("You Clicked");
// }, {once : true});


// Makes background color pink

// Option 1
// clickMeButton.addEventListener("click", function clickButton(){
// document.body.style.backgroundColor = 'pink';
// });

// Option 2
// clickMeButton.addEventListener("click", function clickButton(){
// document.body.classList.add("pink");
// });

// Making a button change text after being clicked once
clickMeButton.addEventListener("click", function changeTest(){
    if (clickMeButton.textContent === "Click Me")
    {clickMeButton.textContent = "Click me again?"}
    
})


function createAddButton(){
    const purple_button = document.createElement("button");
    purple_button.textContent = "Purple?";
    purple_button.addEventListener("mouseover", changeBGPurple)
    document.body.appendChild(purple_button)
}
clickMeButton.addEventListener("click", createAddButton)

function createParagraph(){
    const purple_par = document.createElement("p");
    purple_par.textContent = "Grapes?";
    purple_par.addEventListener("mouseover", changeBGPurple)
    document.body.appendChild(purple_par)
}
clickMeButton.addEventListener("click", createParagraph)

function changeBGPurple(event){
    event.target.classList.add("purple_background");
}


const buttonContainer = document.querySelector(".ButtonContainer");
buttonContainer.addEventListener("mouseover", function changeBGPurple(event){
    event.target.classList.add("purple_background");
})

buttonContainer.addEventListener("click", paraToColor)

function paraToColor(event){
    event.target.style.color = event.target.textContent;
};
