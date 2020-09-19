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
  return weapons.some((weapon) => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons
    .filter((weapon) => weapon.durability > durability)
    .map((weapon) => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce(function (acc, curr) {
    return acc + curr.attack;
  }, 0);
}

function getValuestCountToSumValues(arr, neededSum) {
  const values = [];
  function getReduseArr(array) {
    const reducer = (acc, curr) => acc + curr;
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
  return (
    arr1.length === arr2.length &&
    arr1.every((element, i) => element === arr2[i])
  );
}

class MemorizedFunc {
  constructor(args, result) {
    this.args = args;
    this.result = result;
  }
}

function memorize(fn, limit) {
  const memory = [];
  return function (...args) {
    const founded = memory.find((item) => compareArrays(item.args, args));
    if (founded) return founded.result;
    const result = fn(...args);
    memory.push(new MemorizedFunc(args, result));
    if (memory.length > limit) memory.shift();
    return result;
  };
}
const mSum = memorize(sum, 2);
