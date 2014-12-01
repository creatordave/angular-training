console.log('Started jsExercise');

/*

1)
Write a function, called add that accepts two parameters, and returns the sum.

add(3,5) = 8

*/

function add(a,b){
  return a + b;
}
console.log('Ex 1');
console.log(add(3,5));


/*

2)
Write a function, called mul that accepts two parameters, and returns the multiplicated value.

mul(3,5) = 15

*/

function mul(a,b){
  return a * b;
}
console.log('Ex 2');
console.log(mul(3,5));

/*

3)
Write a function that takes a parameter and returns a function that returns that parameter
func = identifyf(5);

func() //3

*/

function identifyf(a){
  return function(){
    return a;
  };
}

console.log('Ex 3');
func = identifyf(5);
console.log(func());


/*
4)
Write a function that adds from two invocations.
addFunc(3)(5); // 8

*/

function addFunc(a){
  return function(b){
    return a + b;
  }
}

console.log('Ex 4');
console.log(addFunc(3)(5));

/*
5)
Write a function that takes a binary function, and makes it callable with two invocations.

applyFunc(mul)(3)(5) // 15
applyFunc(add)(3)(5) // 8



*/

function applyFunc(type){
  return function(a){
    return function(b){
      return type(a,b);
    }
  }
}

console.log('Ex 5');
console.log(applyFunc(mul)(3)(5));
console.log(applyFunc(add)(3)(5));

/*

This shows how javascript can be used to write functions inside functions, that call other functions within another function...
Reference: https://www.youtube.com/watch?v=hRJrp17WnOE

Author: Douglas Crockford

*/

