//Addition Function
function add(num1, num2){
  return num1 + num2
}
//Subraction Function
function sub(num1, num2){
  return num1 - num2
}
//Multiply Function
function mult(num1, num2){
  return num1 * num2
}
//Divide Function
function div(num1, num2){
  return num1 / num2
}
//Power Function
function power(num1, num2){
  return num1 ** num2
}
//Remainder Function
function mod(num1, num2){
  return num1 % num2
}
//Square Root Function
function square(num1){
  return Math.sqrt(num1)
}


//We receive a string from HTML
//Each calculation has two arguments
//We need to identify the operator in the argument
//Invoke the proper function within caclulate




function calculate(expression) {
  //Split the HTML string into an Array
  const tokens = expression.split(` `)
  //Assigning variables to indecies within the Array
  // let num1;
  // let operator;
  // let num2;

  //Currently not working. If the array length is 3, the first condition will be true and it will end. It won't cascade down the list.
  //Need to find a way to continue the if statements on success.
  if(tokens.length === 3){
    const num1 = Number(tokens[0])
    const operator = tokens[1]
    const num2 = Number(tokens[2])
    console.log(`Tokens length 3 debug`)

  if(Number.isNaN(num1)){
    alert(`Ya goofed, sir.`)
    return;

  } else if(Number.isNaN(num2)){
    alert('Ya goofed, sir.')
    return;

  } else if(operator === `+`){
    return add(num1, num2)

  } else if(operator === `-`){
    return sub(num1, num2)

  } else if(operator === `*`){
    return mult(num1, num2)

  } else if(operator === `/`){
    return div(num1, num2)

  } else if(operator === `^`){
    return power(num1, num2)

  } else if(operator === `%`){
    return mod(num1, num2)
  }

 }
 
 else if(tokens.length === 2){
  const num1 = Number(tokens[1])
  const operator = tokens[0]
  console.log(`Tokens length 2 debug`)

  if(Number.isNaN(num1)){
  console.log(`are you here?`)
  // alert(`Ya goofed, sir.`)
  return;

 } else if(operator === `sqrt`){
  return square(num1)
}
}
}
console.log(calculate(`sqrt 25`))



/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});



