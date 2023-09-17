function say(greeting, firstName ){
    console.log(`${greeting}, ${firstName}`);
}
say("Goodbay", "Junior");

function say(greeting, firstName){
    console.log("firstName : ", firstName);
    console.log("greeting :", greeting);
    console.log(`${greeting},${firstName}`);
}

function add(x,y){
    return x + y;
}
console.log(add(1,2));

function say(greeting, firstName){
    return  `${greeting}, ${firstName}!`;
}
console.log(say("Hllo", "Didas"));

function say(greeting, firstName){
    return `${greeting}, ${firstName}!`;
    console.log("i was called");

}
