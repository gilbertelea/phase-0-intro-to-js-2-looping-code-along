// code your solution in this file
const array = ["", "",""]
const surprise = ""

function writeCards(array, surprise) {

  for (let i = 0; i < array.length;){
     array = [`Thank you, ${array[i++]}, for the wonderful surprise gift!`, `Thank you, ${array[i++]}, for the wonderful surprise gift!`, `Thank you, ${array[i++]}, for the wonderful surprise gift!`];
     debugger;
  }
return array;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(){
  let j = 0;
  while(j < 11 ) {
    console.log(j++);
  }
}

countDown();

