<template>
    <div>
        <input type="text" v-model="valueModel" /><br>
        {{valueModel}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      valueModel: 'South Korea'
    }
  }
}
</script>
