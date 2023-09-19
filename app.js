//const calcSpace = document.querySelector("#calcspace")
//const buttons = ["","","", "", "", "", "", "","","","", "", "", "", "", ""]

let sum = 0

buttonValues = {button1: 1, button2: 2, button3: 3, button4: 4, 
    button5: 5, button6: 6, button7: 7, buton8: 8, button9: 9, buttonDecimal: ".", buttonAdd: "+",
     buttonEqual: "=", buttonMinus: "-", buttonTimes: "X", buttonDiv: "/"}







//Creating the 4x4 buttons below the display 
// const createButtons = () => {
//     buttons.forEach((cell, index) => {
//         const buttonDiv = document.createElement('div')
//         buttonDiv.classList.add('buttondiv')
//         buttonDiv.id = index
//         //buttonDiv.addEventListener('click', any )
//         calcSpace.append(buttonDiv)
//     })
// }

// createButtons()

const buttonGrabber = (event) => {
    let text = event.target.innerText;
    document.getElementById('display').textContent = text

}
