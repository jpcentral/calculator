// variables
let tempArray = []
let prevString = ''
let storedTotal = ''
// display
let display = document.getElementById('display')

// what button did you enter
function start () {
  document.addEventListener('click', addToTemp)
}
// if button is a number add to current string
function addToTemp () {
  let button = event.target.value
  if (!isNaN(button) && button !== '0') {
    tempArray.push(button)
  } else if (button === 'AC') {
    allClear()
  } else if (button === 'CE') {
    clear()
  } else if (button === '.') {
    checkforDot(button)
  } else if (button === '0') {
    checkforZero(button)
  } else if (button === '+' || button === '-' || button === '*' || button === '/') {
    calculate(button)
  } else if (button === '='){
    total()
  }
}
// store current Array, display values

//clear display functions
allClear() {

}

clear() {

}

// // other functions
checkforDot() {

}

checkforZero(){

}

calculate(button){
const stringNum = tempArray.join('') + button
prevString = stringNum
}

total () {

}

// start function
start()