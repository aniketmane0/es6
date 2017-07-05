
const decoded_number = new Array;
let number = new Array;
let sum = 0;
const e = document.getElementById("enter");
e.addEventListener("click", function(event) {
  event.preventDefault()
});

e.addEventListener("click",getInput);
e.addEventListener("click",show);

function getInput() {
  number = document.getElementById("in").value;


  iterate(number);
}

function iterate(num) {


  for (let i = 0; i < num.length; i++) {
    const informative_digit = num[i];
    decode(num,informative_digit,i);
    i = i + informative_digit;
  }

  show();
}


function decode(num,informative_digit,i) {
  const sub = num.substr(i + 1,informative_digit);
  console.log(sub);
  sum += Number(sub);

  decoded_number.push(sub);

}


function show() {
   if((sum%2)==0) {
     document.getElementById("state").innerHTML= "even";
   } else {
     document.getElementById("state").innerHTML= "odd";
   }
}
