let array: number[][];

const main = async () => {
  const input = await Deno.readTextFile("test.txt");

  // This is the master source of data that we will not modify
  // Can just pass around references to this
  array = input.split(/\n/).map((x) => x.split(",").map(Number));

  findClosest(array);

  console.log(array);
};

const findClosest = (array: number[][]) => {
  let closest = Number.MAX_SAFE_INTEGER;
  let pair: number[] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const distance = calculateDistance(array[i], array[j]);
      if (distance < closest) {
        closest = distance;
        pair = [i, j];
      }
    }
  }

  console.log(array[pair[0]], array[pair[1]]);

  return pair;
};

const calculateDistance = (a: number[], b: number[]) => {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  );
};

console.time("execution time");
main();
console.timeEnd("execution time");
