import { useArrayUtils } from '@/arrayUtils'
import { TestItem, testItemHelper } from '../TestHelpers'

describe('orderBy', () => {

  const arrayUtils = useArrayUtils()

  it('should sort item array correctly by name when two items have the same name', () => {
    const items: TestItem[] = [
      {
        id: '',
        position: 1,
        selected: false,
        name: 'A Item',
      },
      {
        id: '',
        position: 2,
        selected: false,
        name: 'A Item',
      },
    ]
    arrayUtils.orderBy(items, 'name')

    expect(items[0].position).toEqual(1)
    expect(items[1].position).toEqual(2)
  })

  it('should sort items with different names correctly by name', () => {
    const items: TestItem[] = testItemHelper.createMockedItems(3)
    arrayUtils.orderBy(items, 'name')

    expect(items[0].position).toEqual(1)
    expect(items[1].position).toEqual(2)
    expect(items[2].position).toEqual(3)
  })

  it('should sort items correctly by position', () => {
    const items: TestItem[] = testItemHelper.createMockedItems(3)
    arrayUtils.orderBy(items, 'position')

    expect(items[0].position).toEqual(1)
    expect(items[1].position).toEqual(2)
    expect(items[2].position).toEqual(3)
  })
})
