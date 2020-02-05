// variables
let tempArr = []
let prevArr = []
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
  if (operator === '+' && prevArr !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevArr = prevArr.join('')
    let result = Number(prevArr) + Number(tempArr)
    tempArr = [result]
  } else if (operator === '-' && prevArr !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevArr = Number(prevArr) - Number(tempArr)
    tempArr = []
  } else if (operator === '*' && prevArr !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevArr = Number(prevArr) * Number(tempArr)
    tempArr = []
  } else if (operator === '/' && prevArr !== '' && tempArr.length > 0) {
    tempArr = tempArr.join('')
    prevArr = Number(prevArr) / Number(tempArr)
    tempArr = []
  }
}

function calculate () {
  tempArr = tempArr.join('')
  prevArr = Number(prevArr) + Number(tempArr)
  tempArr = []
}

// clear display functions

function allClear () {
  tempArr = []
  prevArr = []
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

// start function
start()
