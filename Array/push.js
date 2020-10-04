// let fruit = ['apple', 'mango','pears', 'kiwi'];
// fruit.pop();
// fruit.push('avovado');
// console.log(fruit);
// fruit.shift();
// console.log(fruit);
// fruit.unshift('mushroom');
// console.log(fruit);

// pop removes last item
// push add new item at last position of an array
// shift removes first element/item from an array
// unshift adds new element at 0 index or first position of an array

// fruit.splice(1,0,'berry','banana');
// console.log(fruit);


//exercise

// add joker at index 2 without removing any items
// add joker at 0 index of 2 index value of dc
// add joker at the end of the array
// let dc = ['superman', 'batman', 'aquaman'];
// dc.splice(2,0,'joker');
// console.log(dc);
// dc[2].splice(0,0,'joker');
// console.log(dc);
// dc.splice(3,0,'joker');
// console.log(dc);

// delete
// console.log(dc.length);
// delete dc[1];
// console.log(dc);
// console.log(dc.length);

// dc.splice(0,dc.length);
// console.log(dc);


// concat
// let villan = ['joker'];
// let dcHero = ['flash'];
// console.log(dc.concat(villan,dcHero));

// first argument passed on slice will include that element but will remove all elements before it
// second argument passed on slice method will not include element of that index and removes every elements after that elements including itself

// let fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
// let citrus = fruits.slice(1,2);
// console.log(fruits);
// console.log(citrus);


// exercise
let dc = ['superman', 'batman', 'aquaman', 'flash','wonderwoman'];
let pi = dc.slice(3);
console.log(dc);
console.log(pi);
