import { useArrayUtils } from '@/arrayUtils'
import { ITestDataItem, getTestData } from './test-data'

describe('filterAndOrder', () => {
  const { filterAndOrder } = useArrayUtils<ITestDataItem>()

  it('should filter by "e" and order by name descending', () => {
    const propertyToSortBy = 'name'
    const direction = -1
    const filterText = 'e'
    const items = getTestData()

    const filteredAndSorted = filterAndOrder({
      items,
      filterText,
      propertiesToFilter: ['name', 'address'],
      propertyToSortBy,
      direction
    })

    expect(filteredAndSorted.length).toEqual(2)
    expect(filteredAndSorted[0].id).toEqual(3)
    expect(filteredAndSorted[1].id).toEqual(2)
  })

  it('should filter by "z" and order by name descending', () => {
    const propertyToSortBy = 'name'
    const direction = -1
    const filterText = 'z'
    const items = getTestData()

    const filteredAndSorted = filterAndOrder({
      items,
      filterText,
      propertiesToFilter: ['name', 'address'],
      propertyToSortBy,
      direction
    })

    expect(filteredAndSorted[0].id).toEqual(3)
    expect(filteredAndSorted[1].id).toEqual(1)
  })
})
