let array: string[][];

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  array = input
    .split(/\n/)
    .map((x) => x.trim())
    .map((x) => x.split(" "))
    .map((x) => x.filter((y) => y !== ""));

  let total = 0;

  // We have the format we want, now just iterate through it
  // Instead of rotating the array, we will just iterate through the columns
  for (let i = 0; i < array[0].length; i++) {
    total += calculateProblem(i);
  }

  console.log(total);
};

const calculateProblem = (col: number) => {
  const operation = array[array.length - 1][col];
  let sum = 0;
  let product = 1;

  // Stop before last row
  for (let i = 0; i < array.length - 1; i++) {
    if (operation === "*") {
      product *= parseInt(array[i][col]);
    } else {
      sum += parseInt(array[i][col]);
    }
  }

  return operation === "*" ? product : sum;
};

console.time("execution time");
main();
console.timeEnd("execution time");
