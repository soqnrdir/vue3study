<template>
    <input type="text" v-focus />
    <div>
        <p v-pin="position">페이지 고정 영역(position:fixed;top:50px,left:100px;)</p>
    </div>
</template>
<script>
export default {
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      }
    },
    pin: {
      mounted (el, binding) {
        el.style.position = 'fixed'
        el.style.top = binding.value.top + 'px'
        el.style.left = binding.value.left + 'px'
      }
    }
  },
  data () {
    return {
      position: { top: 50, left: 100 }
    }
  }
}
</script>
