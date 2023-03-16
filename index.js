function scuberGreetingForFeet(feet){
  // Write your code here!
  let result ;
  if (feet <= 400){
  result = 'This one is on me!';
}else if (feet > 2000 && feet <=2500){
  result = 'I will gladly take your thirty bucks.';
}else if(feet >2500){
result ='No can do.'
}
 return result;
}


function ternaryCheckCity(city){
  // Write your code here!
  let result;
  if (city === 'NYC'){
    result ='Ok, sounds good.'
  }
  else {
    result ='No go.'
  }
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let result;
switch (tip) {
  case 'generous':
    result = 'Thank you so much.';
    break;
    case 'not as generous':
      result = 'Thank you.';
      break;
      default:
        result ='Bye.';
}
return result;
}