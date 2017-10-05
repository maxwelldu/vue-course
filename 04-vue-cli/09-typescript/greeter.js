function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "maxwell", lastName: "du" };
document.body.innerHTML = greeter(user);
