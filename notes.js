// we can use eventlistener by two methods

// 1. by adding onclick event and then calling that function

//2.  add eventlistener like this.

//  SYNTAX FOR EVENTLISTENER

// let var_name = document.getElementById("id_name")

// var_name.addEventListener("event to be called", function(){

//     // here the function comes
// })

// EXAMPLE 1

// let clickbox = document.getElementById("box")
// clickbox.addEventListener("click", function openbox(){
//     console.log("i want to open the box. ")
// })


//  const is  also  used to declare a variable 
//  differnce  btw let and const is that in const you can not reassign.



// Write your first inneet html
// also add a paragraph which says thankypu fror buying when clicked

// const container = document.getElementById("container")
// container.innerHTML = "<button onclick()='buy()'> buy </button>"  

// function buy(){
//     container.innerHTML = "<p> Thanks for Buying </p>"
// }


//  write your own first template srings/literals

const recipient = " james"
let sender = "Pratish"

// refactor the email string to use trmplate strings


const email = `hey ${recipient} how is it going ${sender} ?`

console.log(email)



// truthy and falsy statements.


// falsy values

// false
// 0
// ""
// null -- how you as a developer signalize emptiness
// undefined -- how  javascript signalizes emptiness
// NaN
 