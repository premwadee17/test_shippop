<template lang="">
    <div>
      <div class="row" style="margin: 0px 120px; padding: 30px 0px 20px;">
        <div class="col-sm-6" style="text-align: left;">
            <h4><strong>สินค้าขายดี</strong></h4>
        </div>
        <div class="col-sm-6" style="text-align: right;">
            <a href="#" style="color: #212529;" >ดูสินค้าขายดีทั้งหมด</a>
        </div>
      </div>
      <product  v-if="show"
                :products="products"
                @click-product="getValueProduct"
                :showHover="showHover"
                name="best_seller" />
      <detail-product v-else
                      :data="detail"
                      :url="url"
                      :products="products" />
    </div>
</template>
<script>
import product from './product'
import detailProduct from './detail-product.vue'
export default {
  name: 'best-seller',
  data () {
    return {
      detail: {}
    }
  },
  props: [
    'products',
    'url',
    'show',
    'showHover'
  ],
  methods: {
    getValueProduct (obj) {
      this.detail = obj
      this.$emit('click-product', false)
    }
  },
  components: {
    product,
    detailProduct
  }
}
</script>
