<template>
    <div>
        <label><input type="checkbox" v-model="checked"> {{checked}}</label>
        <br>
        <label><input type="checkbox" v-model="checked2" true-value="yes" false-value="no"> {{checked2  }}</label>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      checked2: true
    }
  }
}
</script>
