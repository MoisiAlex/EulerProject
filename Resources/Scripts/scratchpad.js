function $(x) {return document.querySelector(x)}
var factors=$('.factors');
var factorsShow = $("#factorOut");
var maxValue=$('.maxValue')
var maxShow = $("#maxShow");
var sum = $("#displaysum");


// adding event listeners for key up actions, basically update the apropiate variables and update the results on the page
factors.addEventListener('keyup', function() {
                        getFactors();
                        printFact();
  
                        })
                        

maxValue.addEventListener('keyup', function() {
                        getMax();
                        printFact();
    
                        })
                        
                        
function getFactors() {
    var arr = factors.value.split(",");
    for(var i=0;i<arr.length;i++){
        arr[i]= parseInt(arr[i]);
    }
    finalFactors = arr;
    
}

function getMax(){
    max=parseInt(maxValue.value);
}

//need to initialize the values right after declaring them otherwise the sum will be blank until the user triggers an event listener

var finalFactors=[]; getFactors();
var max=0;getMax();

function check(n){
    for(var i=0;i<finalFactors.length;i++){
        if(n%finalFactors[i] === 0){return true;}
    }
    return false;
}

function printFact(){
factorsShow.innerHTML=factors.value;
maxShow.innerHTML= maxValue.value;
var sum=0;
    for (var y=0; y<max; y++){
        if(check(y)){sum+=y;}
    }
    
console.log(sum);
document.getElementById("displaysum").innerHTML= sum;
}



printFact();
/*var sum=0;
var numb=[];

for (var i=0; i<1000;i++){
    if((i%3==0) || (i%5==0)){
    sum+=i;
    numb.push(i);
  }

document.getElementById("displaysum").innerHTML= sum;

document.getElementById("factorOut").innerHTML= sum;
document.getElementById("ans2").innerHTML= numb;
}
*/