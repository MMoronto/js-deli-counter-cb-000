var katzDeliLine = [];



function currentLine(array) {
  if (!array.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  
  for (let i = 0; i < array.length; i++ ) {
    numbersAndNames.push(`${ i + 1 }. ${array[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}


function nowServing(array) {
  if (!array.length) {
    return "The line is currently empty."
  }  
}

function takeANumber(array, name) {
  for (let i = 0; i < array.length; i++) {
    array.push(`Welcome, ${name[i]}. You are number${ i + 1 } in line.`)
  }
}