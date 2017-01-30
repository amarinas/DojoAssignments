

function randomchance(quarters) {
  var winning = quarters;

  for (var i = quarters; i >= 0; i--) { //countdown on how may quarters left
    var reward = Math.floor(Math.random() * 50)+51; // calculation for random  amount winning
    if (Math.floor(Math.random()* 100)+ 1 === 2){//getting a random number for 1 to 100 for quarters
      winning += reward;
      console.log("i won total of " + winning + " quarters");
    }

    if (i === 0){

      console.log("NO NO NO more money");
    }




  }



}

randomchance(100);
