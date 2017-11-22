/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var sum=0;
var numb=[];

for (var i=0; i<1000;i++){
    if((i%3==0) || (i%5==0)){
    sum+=i;
    numb.push(i);
  }
 
document.getElementById("ans").innerHTML= sum;
document.getElementById("ans2").innerHTML= numb;
}
/*
Exception: TypeError: document.getelementid is not a function
@Scratchpad/1:16:2
*/
/*
Exception: TypeError: document.getelementbyid is not a function
@Scratchpad/1:16:2
*/
/*
Exception: TypeError: document.getElementById(...) is null
@Scratchpad/1:19:1
*/
/*
Exception: TypeError: document.getElementById(...) is null
@Scratchpad/1:19:1
*/