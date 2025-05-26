var fruits=["Apple","Banana","Mango",12];
console.log(fruits);
console.log(fruits[0]);
//to add last element
fruits.push("watermelon");
//to add first element
fruits.unshift("orange");
console.log(fruits);
//to remove last element
fruits.pop();
console.log(fruits);
//to remove first element
fruits.shift();
console.log(fruits);

//to find length
console.log(fruits.length);

//array of objects
var classes=[
    {name:"Ghayathri", place:"Thaikkattussery", age:19},
    {name:"Angelin",place:"Ollur", age:18},
    {name:"Alitta",place:"Vellur", age:19},
];
console.log(classes[1].name);

//concatenation
var fname="Biji";
var lname="Bassy";
console.log(`My name is ${fname} ${lname}`)