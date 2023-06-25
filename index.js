
var player1=prompt("Enter name of player1");
var player2=prompt("Enter name of player2");
document.querySelector(".p1").innerHTML=player1;
document.querySelector(".p2").innerHTML=player2;


const btn = document.querySelector(".butt");

btn.addEventListener("click", function () {

  var val1 = Math.floor(Math.random() * 6) + 1;
  var image1 = "images/" + "dice" + val1 + ".png";
  document.querySelectorAll(".dice")[0].setAttribute("src", image1);

  var val2 = Math.floor(Math.random() * 6) + 1;
  var image2 = "images/" + "dice" + val2 + ".png";
  document.querySelectorAll(".dice")[1].setAttribute("src", image2);
  
  if(val1==val2)
    document.querySelector("h1").innerHTML="&#11088; It's a Draw &#11088;";
  
  else if(val1>val2)
    document.querySelector("h1").innerHTML="&#127942; "+player1+" wins";

  else if(val1<val2)
    document.querySelector("h1").innerHTML=player2+" wins &#127942;";

});
