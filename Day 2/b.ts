let invalidSum = 0;

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  input
    .split(",")
    .map((x) => x.split("-"))
    .forEach(([start, end]) => {
      const s = parseInt(start);
      const e = parseInt(end);

      for (let i = s; i <= e; i++) {
        checkValidity(i);
      }
    });

  console.log(invalidSum);
};

const checkValidity = (id: number) => {
  const str = id.toString();

  // Half is the max sequence size, so test all sizes up to that
  const half = str.length / 2;

  for (let sequenceSize = 1; sequenceSize <= half; sequenceSize++) {
    if (str.length % sequenceSize === 0) {
      // Only check sequences that fit
      if (
        checkSequence(
          str,
          str.slice(0, sequenceSize),
          str.length / sequenceSize
        )
      ) {
        invalidSum += id;
        return;
      }
    }
  }
};

// I guess just pass in each possible sequence and check it
const checkSequence = (str: string, sequence: string, times: number) => {
  let valid = true;
  for (let i = 0; i < times; i++) {
    if (
      sequence !== str.slice(i * sequence.length, (i + 1) * sequence.length)
    ) {
      valid = false;
    }
  }

  return valid;
};

console.time("execution time");
main();
console.timeEnd("execution time");
