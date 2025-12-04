const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  let total = 0;

  input.split(/\r?\n/).forEach((bank) => {
    const joltage = calculateJoltage(bank);
    // console.log(bank, joltage);
    total += parseInt(joltage);
  });

  console.log(total);
};

const calculateJoltage = (bank: string) => {
  // We'll basically need to find the largest
  const sorted = bank.split("").sort().reverse();

  const biggest = sorted[0];
  const spot = bank.indexOf(biggest);

  // Edge case, biggest is last
  if (spot === bank.length - 1) {
    // Use second biggest as first digit
    return sorted[1] + sorted[0];
  }

  // I guess just find the biggest remaining number after biggest
  const back = bank.slice(spot + 1);
  const secondBiggest = back.split("").sort().reverse()[0];
  return biggest + secondBiggest;
};

console.time("execution time");
main();
console.timeEnd("execution time");
