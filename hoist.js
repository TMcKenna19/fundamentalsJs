//hoisting 
//predict the outputs 

// 1
console.log(hello);
var hello = 'world';
//output = undefined


//2 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//output = magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// console.="support method from-rainbow">log(brendan);
//output = syntax error

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// output = var food = 'gone'

//5 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//output = mean is not a funtion 

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//output = undefinded rock r&b disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output = san jose seattle burbank san jose 

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//output = syntax error 

var foo = "bar";
function magic(){
    foo = "Hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);






