const btn = document.querySelector(".butt");

btn.addEventListener("click", function () {

  var val1 = Math.floor(Math.random() * 6) + 1;
  var image1 = "images/" + "dice" + val1 + ".png";
  document.querySelectorAll(".dice")[0].setAttribute("src", image1);

  var val2 = Math.floor(Math.random() * 6) + 1;
  var image2 = "images/" + "dice" + val2 + ".png";
  document.querySelectorAll(".dice")[1].setAttribute("src", image2);

});
