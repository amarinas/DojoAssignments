/**
 * Created by amarinas on 3/8/17.
 */
//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]); // invoking the callback many times... delegation!
    }
}

var _ = {
    map: function(arr, callback) {
        //code here;
        for (var i=0; i<arr.length; i++){
            arr[i]=callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, memo) {
        // code here;
        var x = 0;
        if (!memo){
            memo = arr[0];
            x = 1;
        }

        for (var i= x; i< arr.length; i++){
            memo = callback(arr[i], memo);
        }
        return memo;

    },
    find: function(arr, callback) {
        // code here;
        for (var i =0; i< arr.length; i++){
            if(callback(arr[i])){
                return arr[i];
            }
        }

    },
    filter: function(arr, callback) {
        // code here;
        var newArr= []
        for (var i =0; i <arr.length; i++){
            if (callback(arr[i])){
                return arr[i];
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr, callback) {
        // code here;
        var newArr = [];
        for (var i =0; i <arr.length; i++){
            if(!xallback(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newarr;
    }
}
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

arr= [1,3,5,6,7]

var sum = _.map(arr,function(num){
    return num * 2;
});

console.log(sum);
console.log(_.reduce(arr,function callback(x, memo){ return x + memo;}));
console.log(_.find(arr, function callback(num) {return num == 10;}));
console.log(_.filter(arr, function(x){return x >10;}))
console.log(arr);