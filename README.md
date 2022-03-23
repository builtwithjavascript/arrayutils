# @builtwithjavascript/arrayutils
JavaScript array utils

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Farrayutils.svg)](https://badge.fury.io/js/@builtwithjavascript%2Farrayutils)



## code base

TypeScript



## Description

Contains utils like:
- chunk
- shuffle
- randomArray
- orderBy
- filter
- filterAndOrder



## Usage



### chunk example

```typescript
import { useArrayUtils } from '@/arrayutils'

const { chunk } = useArrayUtils()

const items = [...] // an array with your data
const chunks = chunk(items, 3)
```



### shuffle example

```typescript
import { useArrayUtils } from '@/arrayutils'

const { shuffle } = useArrayUtils()

// modifying the original array
const items = [...] // an array with your data
shuffle(items)
// items will be now shuffled


// returning a shuffled copy of the original array
const items = [...] // an array with your data
const shuffledItems = shuffle(items, true)
// items will be untouched, while shuffledItems will be a copy with the shuffled data
```



### randomArray example

```typescript
import { useArrayUtils } from '@/arrayutils'

const { randomArray } = useArrayUtils()

const result = randomArray(1, 27)
```
`result` will contain an array with a random number of entries between 1 and 27 in length
by default the array will contain just integers with value starting at 0
i.e. [
   0,  1, 2, 3, 4,
   5,  6, 7, 8, 9,
  10, 11
]



### orderBy example

```typescript
import { useArrayUtils } from '@/arrayutils'
const { orderBy } = useArrayUtils<ITestDataItem>()

const propertyToSortBy = 'name'
const direction = -1
const items = data // your array with the data

const sortedData = orderBy(items, propertyToSortBy, direction)
```



### filterAndOrder example

```typescript
import { useArrayUtils } from '@/arrayutils'
const { filterAndOrder } = useArrayUtils<ITestDataItem>()

const propertyToSortBy = 'name'
const direction = -1 // 1 is Ascending, -1 is Descending
const filterText = 'text to search'
const items = data // your array with the data

const filteredAndOrderedData = filterAndOrder({
  items,
  filterText,
  propertiesToFilter: ['name', 'address'],
  propertyToSortBy,
  direction
})
```
