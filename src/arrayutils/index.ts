import { useChunk } from './useChunk'
import { useShuffle } from './useShuffle'
import { useRandomArray } from './useRandomArray'
import { useFilter } from './useFilter'
import { useOrderBy } from './useOrderBy'
import { useFilterAndOrder } from './useFilterAndOrder'

export const useArrayUtils = <T = void>() => {
  return {
    chunk: useChunk<T>(),
    shuffle: useShuffle<T>(),
    randomArray: useRandomArray(),
    orderBy: useOrderBy<T>(),
    filter: useFilter<T>(),
    filterAndOrder: useFilterAndOrder<T>()
  }
}
