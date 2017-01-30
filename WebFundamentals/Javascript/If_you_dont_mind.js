var hour = 12;
var minute = 40;
var period = "PM";


if (hour === 0 && hour <12){
  period = "AM";
}else if (hour >= 12) {
  period ="PM"
}

// if (hour === 12 && minute === 00 && period == "PM"){
//   console.log("Its NOON!!!");
// }
//
// else if (hour === 12 && minute === 00 && period == "AM"){
//   console.log("Its MIDNIGHT!!!");
// }
//
// else{




if (minute > 30)
console.log("it almost",hour+ 1, period, "in the morning");

else if (minute <= 30){
  if (minute ===30){
    // console.log("its just after ", hour, "in the evening");
    console.log("its half past ", hour,period );
  }
  if(minute ===5){
    console.log("its 5after", hour, period);
  }
  if(minute === 15){
    console.log("its quarter past", hour,period);
  }
}
else{
  console.log("its just after ", hour, period, "in the evening");

};
