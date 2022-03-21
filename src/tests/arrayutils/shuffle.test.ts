import { useArrayUtils } from '@/arrayUtils'
import { notDeepEqual } from 'assert'
import { TestItem, testItemHelper } from '../TestHelpers'

describe('shuffle', () => {
  const arrayUtils = useArrayUtils()

  it('should shuffle original array as expected', () => {
    const items: TestItem[] = testItemHelper
      .createMockedItems(7)
      .sort((a, b) => (Number(a.position) > Number(b.position) ? 1 : -1))
    const initialPositions = items.map((o) => o.position)

    arrayUtils.shuffle(items)

    const currentPositions = items.map((o) => o.position)
    // positions should NOT match as we expect the method to shuffle the array passed in
    expect(JSON.stringify(currentPositions)).not.toEqual(JSON.stringify(initialPositions))
  })

  it('should returned a shuffle array as expected but leave the original intact', () => {
    const items: TestItem[] = testItemHelper
      .createMockedItems(7)
      .sort((a, b) => (Number(a.position) > Number(b.position) ? 1 : -1))
    const initialPositions = items.map((o) => o.position)

    const result = arrayUtils.shuffle(items, true)

    const currentPositions = items.map((o) => o.position)
    const resultPositions = result.map((o) => o.position)

    // positions should match as we expect the array passed to be left untouched
    expect(JSON.stringify(currentPositions)).toEqual(JSON.stringify(initialPositions))

    // result positions should NOT match as we expect the method to return a new shuffled array
    expect(JSON.stringify(resultPositions)).not.toEqual(JSON.stringify(initialPositions))
  })
})
