
let myCommutes = ["bus","friends","walking"];
let myFavouriteCommute = {
    type: "Bus",
    route: 11,
    print: "Mountain Lion",
    hasMiddleDoor: false,
    drivers: ["bearded guy with glasses"],
};

let megaSentence;
    megaSentence = "<p>My two top commutes from the array are: " 
    + myCommutes[1]
    + [","]
    + myCommutes[2] + "</p>";

megaSentence = 
    megaSentence 
    + "<p>My favourite commute possesses such characteristics: type - " 
    + myFavouriteCommute.type 
    + ", route number  " 
    + myFavouriteCommute.route 
    + ", the best driver: " 
    + myFavouriteCommute.drivers[0] 
    + "</p>";


$("#output").html(megaSentence);
