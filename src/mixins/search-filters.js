export const searchFilters = {
  methods: {
    getByNameFilter (haystack, name) {
      if (!name) return haystack
      const regex = RegExp(`\\b(${name})`, 'i')

      return haystack.filter(item => regex.test(item.name))
    },
    getByTagFilter (haystack, tag) {
      if (!tag) return haystack

      return haystack.filter(item => item.tags.includes(tag))
    },
    getInOrderFilter (haystack, order, orderFunctions) {
      if (!order) return haystack

      const getHaystackDeepClone = [...haystack]

      return getHaystackDeepClone.sort(orderFunctions[order])
    },
    getRandomFilter (haystack) {
      const haystackSize = haystack.length
      const randomItemIndex = Math.floor(Math.random() * haystackSize)

      return haystack[randomItemIndex]
    }
  }
}

export default searchFilters
