const { performance } = require("perf_hooks");
//  Unique object
let sart = performance.now();
const array = [1, 2, 3, 4, 5, 1, 3, 2, 5, 3, 4];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);
// transform an array to an object
const array1 = ["fofo", "toto", "fifi", "titi", "mimi"];
const obj = { ...array1 };
console.log(obj);
// transform obj to an array
const obj1 = {
  name: "abdel",
  score: "48",
  level: "intermediate",
};
const arrayFormObjUsingKeys = Object.keys(obj1);
console.log(arrayFormObjUsingKeys);
const arrayFormObjUsingValues = Object.values(obj1);
console.log(arrayFormObjUsingValues);
let end = performance.now();
console.log(`${end - sart} MS`);
