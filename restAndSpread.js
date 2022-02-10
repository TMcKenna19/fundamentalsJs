const person = {
    firstName: "Rick",
    lastName: "Sanchez",
    email: "Rick@Sanchez.com",
    userName: "WubaSanchez",
    address: {
        address: "123 magic lane",
        city: "Chicago",
        zip: "60614"
    }
    
}

let copyOfPerson = person;
let {...thisIsACopy} = person;
let {, ...noName}

console.log(copyOfPerson);
console.log("***************")
console.log(thisIsACopy);

