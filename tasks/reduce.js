const sum = [1,2,3,4,5,6,7,8,9,10];

let res = sum.reduce((previousValue, currentItem, index) => {
  return previousValue + currentItem 
} , 0)

let total = res
// console.log(total);


const saySom = (name = "Max", message = "said some") => {
  return `${name}, ${message}`
}


// console.log(saySom("Bob", "tram"));


const max = {
  name: "Max",
  canFly: true, 
  canCode: true,
}

changePerson = person => ({
  ...person,
  canFly: false,
  canCode: "Yes"
})

console.log(max);
console.log(changePerson(max));