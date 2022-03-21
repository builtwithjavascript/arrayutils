import { chunk } from './chunk'
import { shuffle } from './shuffle'
import { orderBy } from './orderBy'
import { randomArray } from './randomArray'

export const useArrayUtils = () => {
  return {
    chunk,
    shuffle,
    orderBy,
    randomArray
  }
}
