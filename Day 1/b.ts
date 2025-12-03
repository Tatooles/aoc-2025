const input = await Deno.readTextFile("input.txt");

let dial = 50;
let zeroCount = 0;

const moveDial = (direction: number, distance: number) => {
  const start = dial;
  const end = dial + direction * distance;

  // if, for any number between start and end inclusive, n % 100 === 0

  // brute force
  if (direction === 1) {
    for (let i = start; i < end; i++) {
      if (i % 100 === 0) zeroCount++;
    }
  } else {
    for (let i = start; i > end; i--) {
      if (i % 100 === 0) zeroCount++;
    }
  }

  dial = end;
};

input.split(/\r?\n/).forEach((rotation) => {
  const direction = rotation.slice(0, 1) === "L" ? 1 : -1;
  const distance = parseInt(rotation.slice(1));

  moveDial(direction, distance);

  //   console.log({ direction, distance });
});

console.log(zeroCount);
