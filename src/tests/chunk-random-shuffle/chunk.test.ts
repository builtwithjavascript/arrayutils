import { useArrayUtils } from '@/arrayUtils'
import { TestItem, testItemHelper } from '../TestHelpers'

describe('chunk', () => {
  const { chunk } = useArrayUtils<TestItem>()

  it('should return empty array when original array is empty', () => {
    const items: TestItem[] = []
    const chunks = chunk(items, 3)
    expect(chunks.length).toEqual(0)
  })

  it('should return empty array when original array is undefined', () => {
    const items: any[] = undefined as any
    const chunks = chunk(items as any, 3)

    expect(chunks.length).toEqual(0)
  })

  it('should chunk array with one item in an array of one', () => {
    const items: TestItem[] = [
      {
        id: '',
        position: 1,
        selected: false,
        name: 'X'
      }
    ]
    const chunks = chunk(items, 3)

    expect(chunks.length).toEqual(1)
    expect(chunks[0].length).toEqual(1)
  })

  it('should chunk array of items with a reminder of one', () => {
    const items: TestItem[] = testItemHelper.createMockedItems(7)
    const chunks = chunk(items, 3)

    expect(chunks.length).toEqual(3)
    expect(chunks[0].length).toEqual(3)
    expect(chunks[1].length).toEqual(3)
    expect(chunks[2].length).toEqual(1)
  })

  it('should chunk array of items with a reminder of two', () => {
    const items: TestItem[] = testItemHelper.createMockedItems(8)
    const chunks = chunk(items, 3)

    expect(chunks.length).toEqual(3)
    expect(chunks[0].length).toEqual(3)
    expect(chunks[1].length).toEqual(3)
    expect(chunks[2].length).toEqual(2)
  })

  it('should chunk array of items evenly', () => {
    const items: TestItem[] = testItemHelper.createMockedItems(9)
    const chunks = chunk(items, 3)

    expect(chunks.length).toEqual(3)
    expect(chunks[0].length).toEqual(3)
    expect(chunks[1].length).toEqual(3)
    expect(chunks[2].length).toEqual(3)
  })
})
