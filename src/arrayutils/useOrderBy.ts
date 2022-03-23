export const useOrderBy = <T = void>() => {
  return (values: T[], propertyToSortBy: string, direction: number = 1): T[] => {
    // first time this might be unsorted, so default to ascending
    const sortDirection = isNaN(direction as any) ? 1 : Number(direction !== 0 ? direction : 1)

    const items = values || []
    if (items.length === 0) {
      return []
    }

    if (items.length > 1) {
      return items.sort((itemA, itemB) => {
        const key = propertyToSortBy as keyof T
        const a: any = typeof itemA[key] !== 'undefined' ? itemA[key] : false
        const b: any = typeof itemB[key] !== 'undefined' ? itemB[key] : false
        if (a > b) {
          return 1 * sortDirection
        } else if (a < b) {
          return -1 * sortDirection
        }
        return 0
      })
    }

    return items
  }
}
