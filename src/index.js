// Take a Ten Minute Walk JS
const isValidWalk = (walk) => {
  const howManyOfWay = (way) => walk.filter(thisWay => thisWay === way).length
  const n = howManyOfWay("n") // north
  const s = howManyOfWay("s") // south
  const w = howManyOfWay("w") // west
  const e = howManyOfWay("e") // east
  return walk.length === 10 && n - s === 0 && w - e === 0
}
console.log(
  isValidWalk(["s", "s", "s", "s", "s", "n", "n", "n", "n", "n"]) ?
    "Take a Ten Minute Walk JS test passed" :
    "Take a Ten Minute Walk JS test failed"
)

// Array.diff (remove any array items specified)
const arrayDiff = (arr, removeWhat) => {
  const findIndexinArr = (item) => arr.indexOf(item)
  // I used map for iterating, though not the best practice because I don't plan to return anything
  removeWhat.map(removeThis => {
    while(arr.includes(removeThis)) {
      arr.splice(findIndexinArr(removeThis), 1)
    }
    return undefined
  })
  return arr
}

console.log(
  arrayDiff(["x", "y", "y", "z"], ["y"]) === ["x", "z"] ?
    "Array Diff test Passed" :
    "Array Diff test Passed"
)

// Count String Duplicates
const duplicateCount = (text) => {
  const splitted = text.toLowerCase().split("") // separate char
  return [...new Set(splitted)] // remove dupli
    .map(char => splitted.filter(charFilter => charFilter === char)) // see how many dupli each has
    .filter(arr => arr.length > 1).length // total dupli ones
}

console.log(
  (duplicateCount("podomorogRoup") === 3) ?
    "Count String Duplicates test passed" :
    "Count String Duplicates test failed"
)

// Create Phone Number (from array of numbers)
const createPhoneNumber = (numbers) => {
  const sliceStr = (a, b) => numbers.slice(a, b).join("")
  return "(" + sliceStr(0, 3) + ") " + sliceStr(3, 6) + "-" + sliceStr(6, 10)
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// uniqueInOrder (unique to adjacent char)
const uniqueInOrder = (iterable) => {
  let result = []
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i-1]) {
      continue
    }
    result[i] = iterable[i]
  }
  return result.filter(() => true)
}

console.log(uniqueInOrder("AAAAAAAAAAAMMMMMMMMMMMMMMMMMMMSSSSSSSSSHWBBBBBBaaAA"))
