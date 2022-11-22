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

clickMeButton.addEventListener("click", function changeTest(){
    if (clickMeButton.textContent === "Click Me")
    {clickMeButton.textContent = "Click me again?"}
    
})

