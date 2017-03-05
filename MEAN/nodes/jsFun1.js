var x =[3,5,'dojo','rocks', 'michael','sensei']


for (var i =0; i< x.length; i++){
    console.log(x[i]);
};
x.push(100);
console.log(x);
x = x +","+ ['hello', 'world', 'javascript is fun'];
console.log(x);

var sum = 0;
for (var i =1; i<500; i++){
    sum = sum +i;
}
console.log(sum);

var arr = [1,5,90,-3,0];
var min = arr[0];
for (var i =1; i <arr.length; i++){
    if (arr[i]< min){
        min = arr[i];
        console.log(min);
    }

}

var arr = [1,5,90,-3,0];
var sum = 0;
for (var i =0; i <arr.length; i++){
    sum += arr[i];
    }
console.log(sum/arr.length);

var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}

for (var key in newNinja){
    console.log(newNinja[key]);
}