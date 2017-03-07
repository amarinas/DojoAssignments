// /**
//  * Created by amarinas on 3/5/17.
//  */
// //Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// function sumAll(x,y){
//     var sum = 0;
//     for(var i=x; i<=y; i++){
//         sum += i;
//     }
// }
//
// //Write a loop that will go through an array, find the minimum value, and then return it
// function min(arr){
//     var min = arr[0];
//     for (var i =1; i<arr.length; i++){
//         if(arr[i]< min){
//             min = arr[i];
//         }
//         return min;
//     }
// }
//
// //Write a loop that will go through an array, find the average of all of the values, and then return it
// function average(arr){
//     var sum = 0;
//     for (var i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
//
// }
// //Rewrite these 3 as anonymous functions assigned to variables.
//
// var sum = sumAll();
// var findMin = min();
// var averageAll = average();
//
// //Rewrite these as methods of an object
//
// function perform(){
//     sum :
//         function sumAll(x,y){
//             var sum = 0;
//             for(var i=x; i<=y; i++){
//                 sum += i;
//             }
//         },
//     findMin : function min(arr){
//         var min = arr[0];
//         for (var i =0; i<arr.length; i++){
//             if(arr[i]< min){
//                 min = arr[i];
//             }
//             return min;
//         }
//     },
//
//
//     averageAll: function average(arr){
//         var sum = 0;
//         for (var i=0; i<arr.length; i++){
//             sum += arr[i];
//         }
//         return sum/arr.length;
//
//     }
//
// }

// Properties
// name - set this as your own namedistance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name propertysay_something - have it accept a parameter.
//     This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as
// an argument to this method.walk - have it alert for example “{{your name}} is walking” and increase distance_traveled
// by 3run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10crawl - have it
// alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
    name: "ali",
    distance_traveled: 0,
    say_name : function(){
        console.log(person.name);
    },
    say_something: function(saying) {
        console.log('${person.name} says: ${saying}');
    },
    walk: function(){
        console.log('${person.name} is walking!');
        person.distance_traveled +=3;

    },
    run: function(){
        console.log('${person.name} is running!');
        person.distance_traveled +=10;

    },
    crawl: function(){
        console.log('${person.name} is crawling!');
        person.distance_traveled +=1;

    },
    };

console.log(person);
