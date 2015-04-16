/**
 * [invariant description]
run to compltion invariant: We assume it can code can never be interrupted, paused, and restarted.

Generators: pause themselves and resumed later.



 * @type {[type]}
 */


// function* gen(){
//     console.log("Hello");
//     yield null;
//     console.log("World");
//     yield "at step 3"
//     console.log("Completing");
//     return "DONE";
// }

// var it = gen();
// //call it.next, etc



var run = function*(){
    console.log('hi')
    var  x = 1 + (yield null);
    var  y = 1 + (yield null);
    yield (x +  y);

};
debugger;
run();
run(10);

console.log("Meaning: " + run(30).value)