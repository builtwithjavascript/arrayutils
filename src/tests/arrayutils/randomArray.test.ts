import { useArrayUtils } from '@/arrayUtils'

describe('randomArray', () => {
  const arrayUtils = useArrayUtils()

  it('should return a random array with expected length', () => {
    const attempts = 10
    for (let i = 0; i < attempts; i++) {
      const result = arrayUtils.randomArray(1, 3)
      expect(result.length).toBeGreaterThanOrEqual(1)
      expect(result.length).toBeLessThanOrEqual(3)
    }
  })
})
