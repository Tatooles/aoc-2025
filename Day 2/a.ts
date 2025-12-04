let invalidSum = 0;

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  input
    .split(",")
    .map((x) => x.split("-"))
    .forEach(([start, end]) => {
      const s = parseInt(start);
      const e = parseInt(end);
      //   console.log(s, e);

      for (let i = s; i <= e; i++) {
        checkValidity(i);
      }
    });

  console.log(invalidSum);
};

const checkValidity = (id: number) => {
  const str = id.toString();

  // It has to be repeated twice, so just split it in half
  const firstHalf = str.slice(0, str.length / 2);
  const secondHalf = str.slice(str.length / 2);
  //   console.log(str, firstHalf, secondHalf);

  if (firstHalf === secondHalf) {
    invalidSum += id;
  }
};

console.time("execution time");
main();
console.timeEnd("execution time");
