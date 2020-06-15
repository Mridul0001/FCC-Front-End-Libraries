var displayString = $("#out").text();
var inputDisplay = $("#display").text();
//decimal handling
var flag = false;
const isDecimal = (character) => {
  if(character === "."){
    return true;
  } 
  return false;
}
//regular expressions to simplify expression
var multiple_operators = /([\+\-\*\/]+)([\+\*\/])/g;
var leading_zeroes = /([\+\-\*\/])([0]+)([1-9]+)/g;
var only_zeroes = /([\+\-\*\/])([0])([0]+)/g;
// var check = "+0000000";
// console.log(check.replace(only_zeroes, "$1$2"));

//function to make expresseion
const expression = (character) => {
  var op = false; //variable to check for operators
  //decimal handling if pressed multiple times
  if(isDecimal(character) && flag){
    $("#display").text(inputDisplay);
  }else{
    if(character === "/" || character === "+" || character === "-" || character === "*" || character === "."){
    isDecimal(character) ? flag=true:flag=false;
    op = true;
    if(!isDecimal(character)){
      inputDisplay = "";
    }
  }else if(inputDisplay === "/" || inputDisplay === "*" || inputDisplay === "-" || inputDisplay === "+"){
    inputDisplay = "";
  }
  //first character
  if(displayString === "0" && !op){
    displayString = character;
    inputDisplay = character;
  }else if(displayString === "0" && (op || isDecimal(character))){
    displayString += character; 
    inputDisplay += character;
  }else if(displayString === "0" && character === "0"){
    //if first entered character is 0
    //do nothing
  }else{ 
   displayString+=character; //append to string
   inputDisplay+=character;
  }
  //replace multiple operators with last one
  displayString = displayString.replace(multiple_operators, "$2");
  inputDisplay = inputDisplay.replace(multiple_operators, "$2");
  //replace leading zeroes
  displayString = displayString.replace(leading_zeroes, "$1$3");
  inputDisplay = inputDisplay.replace(leading_zeroes, "$2");
  displayString = displayString.replace(only_zeroes, "$1$2");
  inputDisplay = inputDisplay.replace(only_zeroes, "$2");
  $("#display").text(inputDisplay);
  $("#out").text(displayString);
  }
}

//fucntion to call on pressing any other key or clicking AC
const clear = () => {
  displayString = "0";
    inputDisplay = "0";
    $("#out").text(displayString);
    $("#display").text(inputDisplay);
    flag = false;
}
//fucntion to call on pressing or clicking =
const equal = () => {
  inputDisplay = eval(displayString);
  displayString += "=" + inputDisplay
  $("#out").text(displayString);
  $("#display").text(inputDisplay);
  displayString = inputDisplay;
}

//if AC is pressed, clear everything
$("#clear").on("click", function(){
    clear();
});
//if any digit is pressed, pass digit to function expression
$("#zero").on("click", function(){
  expression("0");
});
$("#one").on("click", function(){
  expression("1");
});
$("#two").on("click", function(){
  expression("2");
});
$("#three").on("click", function(){
  expression("3");
});
$("#four").on("click", function(){
  expression("4");
});
$("#five").on("click", function(){
  expression("5");
});
$("#six").on("click", function(){
  expression("6");
});
$("#seven").on("click", function(){
  expression("7");
});
$("#eight").on("click", function(){
  expression("8");
});
$("#nine").on("click", function(){
  expression("9");
});
//if operator is pressed, pass operator to function expression
$("#add").on("click", function(){
  expression("+");
});
$("#subtract").on("click", function(){
  expression("-");
});
$("#multiply").on("click", function(){
  expression("*");
});
$("#divide").on("click", function(){
  expression("/");
});
//if decimal is pressed
$("#decimal").on("click", function(){
  expression(".");
});

//evaluating expression on pressing =
$("#equals").on("click", function(){
  equal();
})

//handling keypresses
const isKey = (event) => {
  switch(event.key){
    case '0':
      expression("0");
      break;
    case '1':
      expression("1");
      break;
    case '2':
      expression("2");
      break;
    case '3':
      expression("3");
      break;
    case '4':
      expression("4");
      break;
    case '5':
      expression("5");
      break;
    case '6':
      expression("6");
      break;
    case '7':
      expression("7");
      break;
    case '8':
      expression("8");
      break;
    case '9':
      expression("9");
      break;
    case '/':
      expression("/");
      break;
    case '*':
      expression("*");
      break;
    case '-':
      expression("-");
      break;
    case '+':
      expression("+");
      break;
    case '=':
    case "Enter":
      equal();
      break;
    default:
      clear();
  }
}
$("body").on("keypress", function(){
  console.log(event.key);
  isKey(event);
});