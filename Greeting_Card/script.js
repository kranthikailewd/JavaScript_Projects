let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedObject = JSON.parse(greeting);

let from = document.getElementsByClassName("greet")[0];
let to = document.getElementsByClassName("greet")[1];

from.textContent = "From: " + parsedObject.from;
to.textContent = "To: " + parsedObject.to;

let para = document.getElementsByClassName("greet-text")[0];
para.textContent = parsedObject.greetText;
