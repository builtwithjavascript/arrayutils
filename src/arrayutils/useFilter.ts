export const useFilter = <T = void>() => {
  return (args: { items: T[]; filterText: string; properties: string[] }): T[] => {
    const { filterText, properties } = args
    const items = args.items || []
    const textToMatch = (filterText || '').trim().toLowerCase()
    const propertiesToFilter = properties || []

    if (textToMatch.length > 0 && propertiesToFilter.length > 0) {
      const filteredItems = items.filter((item: any) => {
        return propertiesToFilter.some((p) => {
          return (item[p] || '').toString().toLowerCase().indexOf(textToMatch) > -1
        })
      })

      return filteredItems
    } else {
      return items
    }
  }
}
