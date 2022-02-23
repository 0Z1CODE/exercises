// const { data } = require('./data');
// const fetchUsers = () => Promise.resolve(data);
// fetchUsers().then((users) => {
//   const userRoles = users.map((user) => user.role).filter((item, index, arr) => index === arr.indexOf(item));
//    const grouped = {};
//   for (let i = 0; i < userRoles.length; i++) {
//     const currentRole = userRoles[i]
//     grouped[currentRole]  = users.filter((r) => r.role === currentRole);
//   }
//   console.log(grouped);
// })

// fetchUsers().then((users) => {
//   const grouped = {};
//   users.map((u) => {
//     if(!grouped[u.role]) grouped[u.role] = [];
//     grouped[u.role] = grouped[u.role].concat([u]);
//   })
//   console.log(grouped)
// })

// fetchUsers().then((users) => {
// for (const user of users) {
//   console.log(users);
// }
// users.forEach(function(users, index,usesrArr){
//   console.log(users);

// })

// const newUsers = users.map(users=> ({
//   ...users,
//   parapapapam: true
// }))

// const soert = newUsers.sort((a,b) => {
//   return a.age-b .age
// })
// soert[0].parapapapam = "SOS"
// console.log( soert);
// })

// const arr = [1,2,3,4,5]
// console.log(arr.map(i=>x+=i, x=0)[arr.length-1]);
// console.log(arr.map(i=>x+=i, x=0).reverse[0]);

// let total = [0, 1, 2, 3].reduce((a, b) => {
//   return a + b;
// });
// console.log(total);

// let initialValue = 10;
// let sum = [{x: 111}, {x:11}, {x:1}].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.x;
// }, initialValue)

// console.log(sum);

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) =>  {
//   return a.concat(b);
// });
// console.log(flattened);

// const arr = [1,2,1,2,3,4,5,4,6];
// let filtered = new Set(arr)
// filtered = [...filtered]
// console.log(filtered)

//? chain
// function b (arg) {
//   return {
//     value: arg,
//     add: function(a) {
//       this.value +=a
//       return this
//     },
//     div: function(a) {
//       this.value /= a
//       return this
//     },
//     sub: function(a) {
//       this.value -=a
//       return this
//     },
//     mult: function(a) {
//       this.value *=a
//       return this
//     },
//     get: function() {
//       return this.value
//     },
//   }
// }

// const result = b(10).add(5).add(3).sub(2).div(3).mult(4).get();
// console.log(result);

// function a (a) {
//   return (b) => {
//      return a+b
//   }
// }
// console.log(a(2)(3));

//! loops

//  showODD  = (num, ost) =>  {
//   let arr = []
//   for(let i = 0; i<= num; i++){
//     if(i % ost == 0) {
//      arr.push(i)
//     }
//   }
//    return (arr2) => {
//      return arr.concat(arr2)
//    }
// }
// let myarr = showODD(100, 12)([1,2,3])

// console.log(myarr);

//?!!!!!!!!!?
//!obj?

// const user = {
//   name: "Max",
//   age: 26,
//   birYear () {
//     let date = new Date().getFullYear()
//     // const {age} = this
//     // console.log(date - this.age)
//     return date - this.age
//   }
// }

// console.log(user.birYear());

// let years = prompt("Years")
// let mounth = years * 12;
// console.log(typeof mounth);
// alert(`Тебе ${mounth} месяцев чувак, но это не точно`)

// let size = (str) => console.log(str.length);
// size([1,[1,3,4,5,6]])

// console.log(true === 1);

// let coast = 500000
// const years = 30
// let percent = 0.04
// let b = []
// const perMounth = coast / years

// let total = 0
// for (let i = years; i >= 0; i--) {
//   let pay = coast * 0.04
//   coast -= pay
//   total += pay
//   console.log(Math.floor(perMounth + pay));
//   console.log(total);
// b.push(perMounth + Math.floor(pay))
// }

// let total = b.reduce((a, b) => {
//   return a + b;
// });
// console.log(total);

// console.log(b);

// let arr = [
//   { name: "a", age: 12 },
//   { name: "b", age: 15 },
//   { name: "c", age: 65 },
//   { name: "d", age: 23 },
//   { name: "e", age: 58 },
//   { name: "f", age: 90 },
//   { name: "j", age: 10 },
// ];
// let total = arr.reduce((a, cv, i ) => {
//   return a + cv.age
// }, 0)

// let sort = arr.sort((a,b)=> (
//   a.age - b.age
// ))

// console.log(sort);

// let privList = new Map()




let appPriviliges = ["addCase"];
let userPreviliges = ["addCase", "deleteCase"];

 const usePreviliges = (type, action) => {
  let accses;
  const checkIn = appPriviliges.map((privilige) =>
    userPreviliges.includes(privilige)
  );
  checkIn.includes(true) ? accses = true : accses = false
  return accses
};

console.log(usePreviliges());