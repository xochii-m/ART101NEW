let totalnumber =0;

$ ("#needy-button") .click (function(){
    
    totalnumber= totalnumber + 3;

    let sentence = "i have been clicked ";
    let portion = " times"
    let totalnumbers= sentence + totalnumber + portion;

    $ ("#needy-button") .html (totalnumbers);

    let count = 0;
    let colors= ["Orchid", "Coral", "HotPink", "Plum"];
    $("#needy-button").click( function(){
    $("#needy-button").html( "Clicks " + count + " " + colors[count] );
    count=count+1;

    If (count == 4); {count=0;}
});

});



