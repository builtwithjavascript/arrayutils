import { useArrayUtils } from '@/arrayUtils'
import { ITestDataItem, getTestData } from './test-data'

describe('orderBy', () => {
  const { orderBy } = useArrayUtils<ITestDataItem>()

  it('should order by name descending', () => {
    const propertyToSortBy = 'name'
    const direction = -1
    const items = getTestData()

    const sorted = orderBy(items, propertyToSortBy, direction)

    expect(sorted[0].id).toEqual(3)
    expect(sorted[1].id).toEqual(2)
    expect(sorted[2].id).toEqual(1)
  })

  it('should order by name ascending', () => {
    const propertyToSortBy = 'name'
    const direction = 1
    const items = getTestData()

    const sorted = orderBy(items, propertyToSortBy, direction)

    expect(sorted[0].id).toEqual(1)
    expect(sorted[1].id).toEqual(2)
    expect(sorted[2].id).toEqual(3)
  })
})
