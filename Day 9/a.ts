let array;

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  array = input.split(/\n/).map((x) => x.split(",").map(Number));

  let max = -1;

  // Simple brute force double loop
  // Just find pair that makes the largest area
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const area = calculateArea(array[i], array[j]);
      if (area > max) {
        max = area;
      }
    }
  }

  console.log(array, max);
};

const calculateArea = (a: number[], b: number[]) => {
  // It's gotta be inclusive so add 1
  return (Math.abs(a[0] - b[0]) + 1) * (Math.abs(a[1] - b[1]) + 1);
};

console.time("execution time");
main();
console.timeEnd("execution time");
