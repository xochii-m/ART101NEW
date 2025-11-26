animals = 
["orcas"," killer whales"," narwhals"];

diet =
[ "salmon"," herring," ]

size = 
[" 60", " 90", " 100"]

let text = "all time favorite meal is " + diet + "fresh water !";
$("#output").html(text);


let text1 = "some types are " + animals;
$("#output1").html(text1);


let texts2 = "average size of a whale can differ from " + size + " feet long!";
$("#third1").html(texts2);

$("button").hover(function(){
  $(this).css("background-color", "brown");
  }, function(){
  $(this).css("background-color", "orange");
});

$("#info").click(function(){
  $("div").animate({
    height: 'toggle'
  });
}); 

$("#mypic").dblclick(function(){
  $(this).hide();
});

$("#mypic").dblclick(function(){
  $(this).appear();
});



