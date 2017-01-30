function numberOnly(arr) {

  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number"){
      newarr.push(arr[i]);
    }
  }
  return newarr;
}


//
// function onlyNumber(newarr) {
//   for (var i = 0; i < arrnew.length; i++) {
//     if(arrnew[i] === NaN){
//       console.log(i);
//     }
//   }
// return arrnew;
// }

console.log(numberOnly([ 19, "dan", "jean", 4, 92]));
