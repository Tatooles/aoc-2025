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

let arr: string[][];

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  arr = input.split(/\r?\n/).map((row) => row.split(""));

  let total = 0;

  let removal = [];

  // We need a while loop for this
  while (true) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === "@") {
          if (checkSpace(i, j)) {
            total++;
            // Mark for deletion
            arr[i][j] = "x";
            removal.push([i, j]);
          }
        }
      }
    }

    if (!removal.length) break;

    for (const r of removal) {
      arr[r[0]][r[1]] = ".";
    }

    removal = [];
  }

  print();
  console.log(total);
};

const checkSpace = (i: number, j: number) => {
  let adjacentRolls = 0;
  for (const neighbor of neighbors) {
    try {
      if (["@", "x"].includes(arr[i + neighbor[0]][j + neighbor[1]])) {
        adjacentRolls++;
      }
    } catch (_e) {
      // This neighbor is out of bounds so skip
      continue;
    }
  }

  return adjacentRolls < 4;
};

const print = () => {
  arr.forEach((row) => console.log(row.join("")));
};

console.time("execution time");
main();
console.timeEnd("execution time");
