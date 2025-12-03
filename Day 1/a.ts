const input = await Deno.readTextFile("input.txt");

let dial = 50;
let zeroCount = 0;

const moveDial = (direction: string, distance: number) => {
  if (direction === "L") {
    dial -= distance;
  } else {
    dial += distance;
  }

  while (dial < 0 || dial >= 100) {
    if (dial < 0) {
      dial += 100;
    } else if (dial >= 100) {
      dial -= 100;
    }
  }

  //   console.log(dial);
  if (dial === 0) zeroCount++;
};

const arr = input.split(/\r?\n/).forEach((rotation) => {
  const direction = rotation.slice(0, 1);
  const distance = parseInt(rotation.slice(1));

  moveDial(direction, distance);

  console.log({ direction, distance });
});

console.log(zeroCount);
