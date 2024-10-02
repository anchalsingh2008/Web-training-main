// alert("asdfas");
// function bindfname()
// {
//     var fname = document.getElementById('fname').value
//     document.getElementById('bfname').innerHTML  = fname;
   
// }
jQuery('#fname').keyup(function(){
    $('#bfname').html(jQuery('#fname').val());    
});

/**
 * selectors
 * id -> $('#id')
 * class-> $('.class')
 * tag ->  $(h1).css('property', 'value')
 */
// $('#lname').click(myfunction());
// function myfunction(){
//     alert("asdf");
// }

// $('$lname').click(function(){
//     alert("asdf");
// })

//Arrays
var names = ['jhon', 'doe', 'ram'];

for(i=0; i<names.length; i++){
       console.log(names[i]);
}
console.log(names.toString());
/**
 * arrays sort, searching, array push pop, 
 * 
 *
 */

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
