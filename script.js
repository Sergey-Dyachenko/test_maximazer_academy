var numberList = [1, -9, 0, 24, 55, -3] 

function negativeNumbers(numArray){
   var negativenumArray = new Array();
   var   j = 0;
    for(var i=0; i<numArray.length; i++) {
       if (numArray[i]<0){
       negativenumArray[j] = numArray[i];
       j = j+1;
       }
     }
   console.log(negativenumArray);
}

function changeCats(parent){
 var catsArray = new Array();
 var i = 0;
 //begin save cats
 while(i<=(parent.children.length-1)){
    catsArray[i] = parent.children[i].innerHTML;
    i= i+1;
 }
//end save  
 
//remove all cats from div with id=second
var children = parent.childNodes
while(children.length) {
        parent.removeChild(children[0])
    }
//end remove

i = 0;
var random_index = new Array();//array for saving random index cats
//array creating for compare random index cats that already append
//with new random index of cats. Purpose - don't repeat cats.
 
while(i<=(catsArray.length-1)){
 
    do{
    random= Math.floor(Math.random() * catsArray.length); //choose random cat
     }while(catIn(random_index, random)) // compare choosen cat with exist append cats
    //if exist, choose another random cat, if don't that true cat. Let's go to append''
    
    random_index[i]=random;// add new random cat to exist array of random cats
//    alert ('Запись в массив нового random: '+random_index[i]);
    var newDiv = document.createElement('div')//append new random cat
    newDiv.className = 'gallery';
    newDiv.innerHTML = catsArray[random_index[i]];
    parent.appendChild(newDiv);//end of append new cat
    i= i+1;
 }

}

function catIn(random_cat, cat_count){ //function looking cat in array of cats and return true if exist that cat
    var yes = false;    
    for(i=0; i<random_cat.length; i++){
        
        if (random_cat[i] == cat_count){
        var yes = true;}
   
    }
    return yes;
    

}
