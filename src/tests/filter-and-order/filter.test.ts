import { useArrayUtils } from '@/arrayUtils'
import { ITestDataItem, getTestData } from './test-data'

describe('filter', () => {
  const { filter } = useArrayUtils<ITestDataItem>()

  it('should filter by "e"', () => {
    const filterText = 'e'
    const items = getTestData()

    const filtered = filter({
      items,
      filterText,
      properties: ['name', 'address']
    })

    expect(filtered.length).toEqual(2)
    expect(filtered[0].id).toEqual(3)
    expect(filtered[1].id).toEqual(2)
  })

  it('should filter by "z"', () => {
    const filterText = 'z'
    const items = getTestData()

    const filtered = filter({
      items,
      filterText,
      properties: ['name']
    })

    expect(filtered.length).toEqual(2)
    expect(filtered[0].id).toEqual(1)
    expect(filtered[1].id).toEqual(3)
  })
})
