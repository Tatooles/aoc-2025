const input = await Deno.readTextFile("input.txt");

let dial = 50;
let zeroCount = 0;

const moveDial = (direction: string, distance: number) => {
  if (direction === "L") {
    dial -= distance;
  } else {
    dial += distance;
  }

  if (dial % 100 === 0) zeroCount++;
};

input.split(/\r?\n/).forEach((rotation) => {
  const direction = rotation.slice(0, 1);
  const distance = parseInt(rotation.slice(1));

  moveDial(direction, distance);

  //   console.log({ direction, distance });
});

console.log(zeroCount);
