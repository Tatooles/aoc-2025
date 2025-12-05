const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  const arr = input.split(/\r?\n/).map((row) => row.split(""));

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === "@") {
        total += checkSpace(arr, i, j);
      }
    }
  }

  console.log(total);
};

const checkSpace = (arr: string[][], i: number, j: number) => {
  let adjacentRolls = 0;
  for (const neighbor of neighbors) {
    try {
      if (arr[i + neighbor[0]][j + neighbor[1]] === "@") {
        adjacentRolls++;
      }
    } catch (e) {
      // This neighbor is out of bounds so skip
      continue;
    }
  }

  return adjacentRolls < 4 ? 1 : 0;
};

console.time("execution time");
main();
console.timeEnd("execution time");
