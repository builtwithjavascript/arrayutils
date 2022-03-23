export interface ITestDataItem {
  id: number
  name: string
  address: string
}

const testData: ITestDataItem[] = [
  {
    id: 1,
    name: 'Abcz',
    address: '123 Main Plaza'
  },
  {
    id: 3,
    name: 'Zed',
    address: '5342 Long Blvd. #3567'
  },
  {
    id: 2,
    name: 'Efg',
    address: '546 South Ave'
  }
]

export const getTestData = () => {
  return JSON.parse(JSON.stringify(testData))
}
