// Callback functions 
// built-in callback functions 
// setTimeout, Arr.forEach, geolocation.getCurrentPosition
// make your own callback functions

// setTimeout(hello,2000,'Nia')
let names = ['Rick','Morty','Mr. Poopy Butthole','Bird Person']
names.forEach(hello);

function doThing(other){
    let x = 7;
    //do lots of other things 
    //...
    let name = 'Tim'
    console.log(x)
    other(name);
}
function hello(name){
    console.log("hello", name)
}

// doThing(hello);