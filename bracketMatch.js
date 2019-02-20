/*
  the trick for this problem is to realize that if it is not open
  if(str[i] == '(') open++
  else if(open > 0 && str[i] == ')') open-- //that means we can substract to it
  but if we cannot do it we need to:
  else { close++}
  return open + close; // because that's how many we need to match them so that     are complete.
  */

  
function bracketMatch(str) {
  var open = 0;
  var close = 0;
  for(var i=0; i < str.length; i++) {
    if(str[i] == '(') {
      open++;
    } 
    else if(open > 0 && str[i] == ')') {
      open--;
    }
    else {
      close++;
    }
  }
  return open + close;
}