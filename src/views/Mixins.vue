<script>
import ApiMixin from '../api.js'
export default {
  mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await this.$callAPI('https://37c1d1ab-b6e4-42e2-9828-b8f64f4881e1.mock.pstmn.io/list', 'get')
    console.log(this.productList)
  }
}
</script>
