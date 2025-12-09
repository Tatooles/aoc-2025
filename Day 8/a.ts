let array: number[][];

const main = async () => {
  const input = await Deno.readTextFile("input.txt");

  array = input.split(/\n/).map((x) => x.split(",").map(Number));

  const connections: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const distance = calculateDistance(array[i], array[j]);
      connections.push([i, j, distance]);
    }
  }

  connections.sort((a, b) => a[2] - b[2]);

  const circuits: number[][] = [];

  // each group will be a circuit
  for (let i = 0; i < 1000; i++) {
    const connection = connections[i];
    const firstPointLocation = circuits.findIndex((x) =>
      x.includes(connection[0])
    );

    const secondPointLocation = circuits.findIndex((x) =>
      x.includes(connection[1])
    );

    if (firstPointLocation === -1 && secondPointLocation === -1) {
      circuits.push([connection[0], connection[1]]);
    } else if (firstPointLocation !== -1 && secondPointLocation === -1) {
      circuits[firstPointLocation].push(connection[1]);
    } else if (secondPointLocation !== -1 && firstPointLocation === -1) {
      circuits[secondPointLocation].push(connection[0]);
    } else if (
      firstPointLocation !== -1 &&
      secondPointLocation !== -1 &&
      firstPointLocation !== secondPointLocation
    ) {
      // If both points are found in separate circuits, we need to connect the groups!!!!
      circuits[firstPointLocation] = circuits[firstPointLocation].concat(
        circuits[secondPointLocation]
      );
      // Now delete secondPointLocation circuit
      circuits.splice(secondPointLocation, 1);
    }
  }

  circuits.sort((a, b) => b.length - a.length);

  // console.log(connections);
  console.log(circuits[0].length * circuits[1].length * circuits[2].length);
};

const calculateDistance = (a: number[], b: number[]) => {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  );
};

console.time("execution time");
main();
console.timeEnd("execution time");
