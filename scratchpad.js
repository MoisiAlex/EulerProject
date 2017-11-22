function $(x) {return document.querySelector(x)}
var factors=$('.factors');
var factorsShow = $("#factorOut");
var maxValue=$('.maxValue')
var maxShow = $("#maxShow");
var sum = $("#displaysum");
var finalFactors=[];
var max=0;


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

function check(n){
    for(var i=0;i<finalFactors.length;i++){
        if(n%finalFactors[i] === 0){return true;}
        else{return false;}
    }
}

function printFact(){
factorsShow.innerHTML=factors.value;
maxShow.innerHTML= maxValue.value;
var sum=0;
    for (var y=0; y<max; y++){
        if(check(y)){sum+=y;}
    }
    
console.log(sum);
sum.innerHTML = sum; 
}



printFact();
/*var sum=0;
var numb=[];

for (var i=0; i<1000;i++){
    if((i%3==0) || (i%5==0)){
    sum+=i;
    numb.push(i);
  }
 
document.getElementById("factorOut").innerHTML= sum;
document.getElementById("ans2").innerHTML= numb;
}
*/