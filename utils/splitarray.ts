export const splitArray = <T>(array: Array<T>, numParts: number) => {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
};

// Input
// array = [1, 2, 3, 4, 5, 6, 7, 8]
// numParts = 3
// Process
// i = 0, index = 0 % 3 = 0: result[0] = [1]
// i = 1, index = 1 % 3 = 1: result[1] = [2]
// i = 2, index = 2 % 3 = 2: result[2] = [3]
// i = 3, index = 3 % 3 = 0: result[0] = [1, 4]
// i = 4, index = 4 % 3 = 1: result[1] = [2, 5]
// i = 5, index = 5 % 3 = 2: result[2] = [3, 6]
// i = 6, index = 6 % 3 = 0: result[0] = [1, 4, 7]
// i = 7, index = 7 % 3 = 1: result[1] = [2, 5, 8]

/* //result[0] = [];
      //result = [[]];
      //result[0].push(array[0]); // result[0].push(1)
      //result = [[1]];*/
