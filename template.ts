let array: string[];

const main = async () => {
  const input = await Deno.readTextFile("test.txt");

  array = input.split(/\n/);

  console.log(array);
};

console.time("execution time");
main();
console.timeEnd("execution time");
