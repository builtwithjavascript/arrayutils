const getRandomInt = (min?: number, max?: number) => {
  min = Math.floor(min || 1)
  max = Math.ceil(max || 10)
  
  return Math.floor(Math.random() * max) + min;
}

export const randomArray = (min?: number, max?: number): number[] => {
  const size = getRandomInt(min, max)
  return Array.from(Array(size).keys())
}
