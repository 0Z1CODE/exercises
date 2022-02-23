function getFinalPrice(price: number, discount: number) {
  return price - price / discount;
}
// console.log(getFinalPrice(100, 1));


// {
//   let arr = [1,()=>{console.log(2);
//   }, "dd"]
//   arr = 2 
// }



// const lol = (a: number, b : string): number => {
//   return a + b
// }


// console.log(lol(12,"d"));
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight: Pound;
}


let patient: Patient = {
  name: 'Joe Smith',
  height: 5,
  weight: 100
}
