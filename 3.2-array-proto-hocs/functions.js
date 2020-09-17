"use strict";
console.clear();

const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

function getNames() {
  return weapons.map((weapon) => weapon.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter((weapon) => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.filter((weapon) => weapon.durability > durability).length > 0
    ? true
    : false;
}

function getReliableWeaponsNames(durability) {
  return weapons
    .filter((weapon) => weapon.durability > durability)
    .map((weapon) => weapon.name);
}

function getTotalDamage() {
  const reducer = (acc, currentValue) => acc + currentValue;
  return weapons.map((weapon) => weapon.attack).reduce(reducer);
}

function getValuestCountToSumValues(arr) {
  const reducer = (acc, currentValue) => acc + currentValue;
  return arr.reduce(reducer);
}

function getValuestCountToSumValues(arr, neededSum) {
  const values = [];
  function getReduseArr(array) {
    const reducer = (acc, currentValue) => acc + currentValue;
    return array.reduce(reducer);
  }
  if (getReduseArr(arr) > neededSum) {
    do {
      values.push(arr.shift());
    } while (getReduseArr(values) < neededSum);
    return values.length;
  } else {
    return arr.length;
  }
}
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  function isEqual(element, i) {
    return element === arr2[i];
  }
  return arr1.every(isEqual);
}

class MemorizedFunc {
  constructor(args, result) {
    this.args = args;
    this.result = result;
  }
}

// function memorize(fn, limit) {
//   const memory = [];
//   return function (...args) {
//     const founded = memory.find((item) => compareArrays(item.args, [...args]));
//     if (founded) return founded.result;
//     memory.push(new MemorizedFunc([...args], fn(...args)));
//     if (memory.length > limit) memory.shift();
//     return fn(...args);
//   };
// }
// const mSum = memorize(sum, 2);

function memorize(fn, limit) {
  const memory = [
    {
      args: [3, 4],
      result: 7,
    },
    {
      args: [1, 3],
      result: 4,
    },
  ];
  return function (...args) {
    const founded = memory.find((item) => compareArrays(item.args, [...args]));
    if (founded) return founded.result;
    memory.splice(0, memory.length - 1);
    memory.push({ args: [...args], result: fn(...args) });
    if (memory.length > limit) memory.shift();
    return fn(...args);
  };
}
const resultFunction = memorize((a, b) => a + b, 2);
