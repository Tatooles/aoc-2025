const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  const parsed = input.split(/\n\n/).map((x) => x.split(/\n/));

  // Create 2 length array with start and end values
  const ranges = parsed[0].map((x) => x.split("-").map(Number));

  let freshCount = 0;

  // Check if ids are in range
  parsed[1].map(Number).forEach((x) => {
    for (const range of ranges) {
      if (x >= range[0] && x <= range[1]) {
        freshCount++;
        break; // break so we don't double count
      }
    }
  });

  console.log(freshCount);
};

console.time("execution time");
main();
console.timeEnd("execution time");
