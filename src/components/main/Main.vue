<template>
  <div>
    <ul>
      <li>{{ bookList }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    bookList () {
      return this.$store.state.book.bookList
    },
  },
  methods: {
    async loadData () {
      try {
        let payload = {
          offset: 0,
          limit: 10,
        }

        await this.$store.dispatch('book/getBookList', payload)
      } catch (error) {
        console.log(error)
      }
    },
  },
  created () {
    this.loadData()
  },
}
</script>
