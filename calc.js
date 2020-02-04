// variables
let tempArr = []
let prevNum = 0
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
    tempArr.push(button)
    display.value = tempArr.join('')
  } else if (button === 'AC') {
    allClear()
  } else if (button === 'CE') {
    clear()
  } else if (button === '.') {
    checkforDot(button)
  } else if (button === '0') {
    checkforZero(button)
  } else if (button === '+' || button === '-' || button === '*' || button === '/') {
    operate(button)
    clear()
  } else if (button === '=') {
    calculate()
  }
}
// store current Arr, display values

// clear display functions

function allClear () {
  tempArr = []
  prevNum = 0
  display.value = ''
}

function clear () {
  display.value = ''
}

// // other functions
function checkforDot () {
  tempArr.forEach((x) => {
    if (x === '.') {
      return
    }
    tempArr.push('.')
    display.value = tempArr.join('')
  })
}

function checkforZero () {
  if (tempArr[0] === '0' && !tempArr[1]) {
    return
  }
  tempArr.push('0')
  display.value = tempArr.join('')
}

// if +
// check if prevNum is empty
// if it is return
// if not check if temp Arr is > 0
// if not return
// if true
// tempArr.join('')
// prevNum = number(prevNum) + number(tempArr)
// then set tempArr to []

function operate (operator) {
  if (operator === '+' && prevNum !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevNum = Number(prevNum) + Number(tempArr)
    tempArr = []
  } else if (operator === '-' && prevNum !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevNum = Number(prevNum) - Number(tempArr)
    tempArr = []
  } else if (operator === '*' && prevNum !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevNum = Number(prevNum) * Number(tempArr)
    tempArr = []
  } else if (operator === '/' && prevNum !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevNum = Number(prevNum) / Number(tempArr)
    tempArr = []
  }
}

function calculate () {
  tempArr = tempArr.join('')
  prevNum = Number(prevNum) + Number(tempArr)
  tempArr = []
}

// start function
start()
