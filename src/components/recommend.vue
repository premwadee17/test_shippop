<template lang="">
  <div>
    <div class="row" style="margin: 0px 120px; padding: 30px 0px 20px;">
      <div class="col-sm-6" style="text-align: left;">
          <h4><strong>สินค้าแนะนำ</strong></h4>
      </div>
      <div class="col-sm-6" style="text-align: right;">
          <a href="#" style="color: #212529;" >ดูสินค้าขายดีทั้งหมด</a>
      </div>
    </div>
    <product  :products="products"
              :showHover="showHover"
                name="recommend" />
  </div>
</template>
<script>
import product from './product'
export default {
  name: 'recommend',
  data () {
    return {}
  },
  props: [
    'products',
    'showHover'
  ],
  components: {
    product
  }
}
</script>
