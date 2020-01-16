// variables
let tempArray
let prevButton
let prevArray
let storedTotal
// display
let display = document.getElementById('display')
console.log(document)

// start function
start()

// what button did you enter
function start () {
  document.addEventListener('click', getButtonValue)
}
// if button is a number add to current string
function getButtonValue () {
  console.log(event)
  let button = event.target.value

  console.log(button)
  if (button === '.') {
    checkforDot()
  } else if (button === '0') {
    checkforZero()
  }

}
// store current Array, display values
//

// // other functions
// // if we click 0 twice
// checkforZero() {

// }
// // if we click . twice
// checkforDot(){

// }
// // if we
