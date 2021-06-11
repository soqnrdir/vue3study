<template>
    <h1>Full Name : {{fullName}} </h1>
    <button type="button" @click="changeName">변경</button>
</template>
<script>
export default {
  data () {
    return {
      firstName: 'Seungwon',
      lastName: 'Go',
      fullName: ''
    }
  },
  watch: {
    // 값이 바뀔때만 watch가 동작한다.
    firstName () {
      console.log(`firstName ${this.firstName}`)
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName () {
      console.log(`changeName ${this.firstName}`)
      // this.firstName = (new Date()).toString()
      this.firstName = 'Test'
    }
  }
}
</script>
