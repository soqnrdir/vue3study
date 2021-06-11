<template>
    <p>Count : {{count}}</p>
    <p>cartCount : {{cartCount}}</p>
    <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
  computed: {
    cartCount () {
      return this.$store.getters.cartCount
    },
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
