<template>
    <div>
        <h2>Calculator</h2>
        <div>state.
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import { plusCalculator } from '../common.js' // toRefs 추가
export default {
  name: 'calculator',
  setup () {
    const { num1, num2, result } = plusCalculator() // 외부 function
    return {
      num1, num2, result
    }
  }
}
</script>
