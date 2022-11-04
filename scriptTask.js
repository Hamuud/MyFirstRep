let ninja = {
visible: false,
name: "Hatori",
mana: 322,
}

let ninja2 = Object.create(ninja);
ninja2.health = '100%';

console.log(ninja.health);
console.log(ninja2.health);
console.log("----------------------");

const weapons = ["katana", "sword", "shuriken"];

const things = [1.3, true, undefined, ninja];
const base = 50;
const multiAttacks = [base, base * 1.35];
console.log(multiAttacks);

console.log("----------------------");
console.log("--------1 Task--------");
function unicFn(initialArray) {
    // Write code here
   }
console.log("----------------------");

console.log("--------2 Task--------");

function isEvenArray(initialArray) {
    let evenArray = initialArray.every(function(elem){
        if (elem % 2 == 0) {
            return true;
        }
        else {
            return false;
        }  
    })
    console.log(evenArray);
   }
   isEvenArray([2,3,1,3,7])
   isEvenArray([2,4,6,8])
   console.log("----------------------");
   console.log("--------3 Task--------");

   function filterArray(initialArray) {
      const array1 = [2, 'string', 3 , 'test'];
        const result = array1.filter(element => typeof element === 'string');
        console.log(result)
    }
   filterArray();

   console.log("----------------------");
   console.log("--------4 Task--------");
   function findUser(initialObject) {
    const names = Object.keys(initialObject);
    const res = [];
   
    names.forEach(name => {
      const value = initialObject[name];
      const { city, age } = value;
      
      if (age > 18 && city === "London") {
        res.push(name);
      }
    });    
    console.log("res: ", res);
  }
findUser({Max: {age: 23, city: "London"}, Mike: {age: 20, city: "NY"}});
   console.log("----------------------");
   console.log("--------5 Task--------");

   function unicFn(initialArray) {
    newSet = new Set(arr);
    initialArray = Array.from(newSet);
    return initialArray
   }
    
   const arr = [2, 3, 1, 3, 3, 7];
   console.log(unicFn(arr));
   console.log("----------------------");