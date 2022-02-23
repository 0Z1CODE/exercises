let balance = 20;
let a, b, c;
const randomGenerator = () => {
  const rnd = Math.floor(Math.random() * 6);
  return rnd;
};

for (let i = 0; true; i++) {
  a = randomGenerator();
  b = randomGenerator();
  c = randomGenerator();
  if (a == b && b == c && c !== 0) {
    balance += c * 5;
    console.log(
      `wooooow ==== a: ${a},b: ${b},c: ${c}::::: balance = ${balance} iteration =  ${i}`
    );
  } else {
    balance -= 0.5;
    console.log(
      `loooh ==== a: ${a},b: ${b},c: ${c}::::: balance = ${balance} iteration =  ${i}`
    );
  }
  if (a + b + c === 0) {
    balance = 0;
    console.log("Не повезло, не подфортило");
    break;
  }
  if (balance == 0) {
    break;
  }
}

console.log(balance);

