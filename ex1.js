let cars = 12;
let humans = 12;

const place = ["a", "b", "c", "d"];
const killH = (rnd) => {
  humans -= rnd;
  if (humans < 0) humans = 0;
};
const killC = (rnd) => {
  cars -= rnd;
  if (cars < 0) cars = 0;
};

// for (let i = 0; i <= 12; i++) {

// }

while (Boolean(cars) && Boolean(humans)) {
  const rnd = Math.floor(Math.random() * 10);
  let c = Math.round(Math.random() * 100);
  if (c < 50) {
    killH(rnd);
  } else killC(rnd);
  console.log(humans + ":" + cars);
}

// console.log(`${cars}vs${humans}`);
