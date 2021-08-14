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

      const getHaystackShallowClone = [...haystack]

      return getHaystackShallowClone.sort(orderFunctions[order])
    },
    getRandomFilter (haystack) {
      const randomItemIndex = Math.floor(Math.random() * haystack.length)

      return haystack[randomItemIndex]
    }
  }
}

export default searchFilters
