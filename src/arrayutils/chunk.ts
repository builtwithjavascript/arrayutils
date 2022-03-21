export const chunk = <T>(array: T[], chunkSize: number): T[][] => {
  // NOTE; function will return an empty array if values parameter is undefined
  const inputArray = array || [];
  const result: T[][] = [];
  if (inputArray.length > chunkSize) {
    // if values.length > chunkSize, proceed to chunk it
    for (let i = 0, len = inputArray.length; i < len; i += chunkSize) {
      result.push(<T[]>inputArray.slice(i, i + chunkSize));
    }
    return result;
  } else if (inputArray.length > 0) {
    // if values.length is less than chunkSize but greater than 0, add it to result
    result.push(inputArray);
    return result;
  }
  return result;
};
