// variables
let tempArray = []
let prevString = ''
let operator = ''
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
    display = tempArray.join('')
  } else if (button === 'AC') {
    allClear()
  } else if (button === 'CE') {
    clear()
  } else if (button === '.') {
    checkforDot(button)
  } else if (button === '0') {
    checkforZero(button)
  } else if (button === '+' || button === '-' || button === '*' || button === '/') {
    checkForOperator(button)
  } else if (button === '='){
    calculate(operator)
  }
}
// store current Array, display values

// clear display functions

allClear () {

}

clear () {
display = ''
}

// // other functions
checkforDot () {
tempArray.forEach((x) => {if(x === '.'){
  return
}
tempArray.push('.')
display = tempArray.join('')
})
}

checkforZero () {
if (tempArray[0] === '0' && !tempArray[1]) {
  return
}
tempArray.push('0')
display = tempArray.join('')
}

storeOperator (button) {
  if (tempArray.length > 0) {
    prevString = tempArray.join('') 
    storeOperator = 
  }
// if temparray.length > 0
// make temp array a string
// move string to previous string with white space and button
// clear display
// otherwise return
}

calculate() {
if (operator === '+' && tempArray.length > 0) {
  display = Number(prevString) + Number(tempArray.join(''))
  prevString = display
} else if (operator === '-') {
  display = Number(prevString) - Number(display)
  prevString = display
} else if (operator === '-') {
  display = Number(prevString) - Number(display)
  prevString = display
} else (operator === '-') {
  display = Number(prevString) - Number(display)
  prevString = display
}

// start function
start()