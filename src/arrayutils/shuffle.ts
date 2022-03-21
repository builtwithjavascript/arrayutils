export const shuffle = <T>(
  array: T[],
  returnNewArray: boolean = false
): T[] => {
  let inputArray = array || [];
  let results = inputArray;
  if (inputArray.length > 0) {
    if (returnNewArray) {
      results = [...inputArray];
    }

    for (let i: number = results.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      const tmp = results[i];
      results[i] = results[j];
      results[j] = tmp;
    }
  }
  return results;
};
