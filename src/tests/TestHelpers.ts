import crypto from 'crypto'

export interface TestItem {
  id: string
  position: number
  name: string
  selected: boolean
}

const uniqueId = () => {
  // const array: Uint32Array = new Uint32Array(1)
  // window.crypto.getRandomValues(array)
  // let str = array[0].toString()

  let str: string = crypto.randomBytes(5).toString('hex')
  if (str.length < 10) {
    str = str.padStart(10, '0')
  }
  return str
}

export class TestItemHelper {
  private shuffle<T>(a: T[]): void {
    for (let i: number = a.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1))
      const tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
  }

  createMockedItems(max: number): TestItem[] {
    const items: TestItem[] = []

    for (let i = 1; i <= max; i++) {
      items.push({
        id: uniqueId(),
        position: i,
        selected: false,
        name: `${String.fromCharCode(64 + i)} Item`
      })
    }

    this.shuffle<TestItem>(items)

    return items
  }
}

export const testItemHelper = new TestItemHelper()
