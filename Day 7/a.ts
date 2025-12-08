let array: string[][];

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  array = input.split(/\n/).map((x) => x.split(""));

  let splitCount = 0;

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === "S" || array[i][j] === "|") {
        // Update the next row
        try {
          if (array[i + 1][j] === "^") {
            splitCount++;
            array[i + 1][j - 1] = "|";
            array[i + 1][j + 1] = "|";
          } else {
            array[i + 1][j] = "|";
          }
        } catch (_e) {}
      }
    }
  }
  printDiagram();
  console.log(splitCount);
};

const printDiagram = () => {
  for (const row of array) {
    console.log(row.join(""));
  }
};

console.time("execution time");
main();
console.timeEnd("execution time");
