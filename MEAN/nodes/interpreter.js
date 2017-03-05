// /**
//  * Created by amarinas on 3/4/17.
//  */
// var hello ="interesting";
// function example() {
//     var hello = "hi";
//     console.log(hello);
//
// }
// example();
// console.log(hello);
//
// //declarations get hoisted
// var hello;
// function example() {
//     var hello;
//     hello = "hi";
//     console.log(hello);
// }
// //assignments and invocation maintain order
// hello = "interesting";
// example();
// console.log(hello);
//
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//     first_variable = "Not anymore!!!";
//     console.log(first_variable);
// }
// console.log(first_variable);


// //Problem 1
// console.log(first_variable); //undefined first_variable function gets called without bieng declared first
// var first_variable = "Yipee I was first!"; // first_variable is declared
//
// // firstFunc() is created but never been called
// function firstFunc() {
//     first_variable = "Not anymore!!!";
//     console.log(first_variable);
// }
//
// // first_variable is called not the function
// console.log(first_variable);

// Problem 2
// var food = "Chicken";
// function eat() {
//     food = "half-chicken";
//     console.log(food);
//     var food = "gone";       // CAREFUL!
//     console.log(food);
// }
// eat();
// console.log(food);

// //food is assigned to chicken
// var food = "Chicken";
//
// function eat() {
//     food = "half-chicken";  //food is hoisted
//     console.log(food);      //print food
//     var food = "gone";       // CAREFUL! // food is reassigned to gone
//     console.log(food);      //print food with a var of gone
// }
//
// eat(); //eat function is called
// console.log(food); //food is called which is a variable from outside the funcition

//Problem 3

// var new_word = "NEW!";
// function lastFunc() {
//     new_word = "old";
// }
// console.log(new_word);

// new_word assigned to new
var new_word = "NEW!";
//function is created but never called
function lastFunc() {
    new_word = "old";
}
//new_word is called from the original assignment
console.log(new_word);