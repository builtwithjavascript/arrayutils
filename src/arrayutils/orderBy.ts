import { getProperty } from './shared'

export const orderBy = <T, K extends keyof T>(values: T[], orderType: K): T[] => {
  const items = (values || [])
  if (items.length > 1) {
    items.sort((a, b) => {
      const valueA = getProperty<T, K>(a, orderType)
      const valueB = getProperty<T, K>(b, orderType)
      if (valueA < valueB) {
        return -1
      } else if (valueA > valueB) {
        return 1
      }
      return 0
    })
  }
  return items
}
