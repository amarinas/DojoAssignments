var hour = 3;
var minute = 50;
var period = "PM";
//
// if (hour === 0 && hour <12){
//   period = "AM";
//   if (minute > 30 )
//   console.log("it almost",hour+ 1, period, "in the morning");
// }else if (hour >= 12) {
//   period ="PM"
//   if (minute <30 )
//     console.log("its just after ", hour, period, "in the evening");
//
// }
if (period === "PM"){
  if (minute < 30)
  console.log("its just after", hour,  "in the evening");
  else {
    console.log("its almost", hour + 1, "in the evening");
  }
}

else if (period === "AM"){
  if (minute < 30)
  console.log("its just after", hour,  "in the morning");
  else {
    console.log("its almost", hour + 1, "in the morning");
  }
}
