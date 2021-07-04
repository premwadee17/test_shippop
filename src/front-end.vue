<template lang="">
  <div>
    <front-nav @click-index="getValueIndex"/>
    <div>
      <front-slide v-if="show" />
      <best-seller  :products="products"
                    :url="mock.url"
                    :show="show"
                    @click-product="getValueDisplay"
                    :showHover="true" />
      <recommend  :products="products"
                  :showHover="false"
                  v-if="show" />
      <basicJs />
    </div>
  </div>
</template>
<script>
import nav from './components/nav.vue'
import slide from './components/slide.vue'
import mock from './mock'
import bestSeller from './components/best-seller.vue'
import recommend from './components/recommend.vue'
import basicJs from './basic-js.vue'
export default {
  name: 'front-end',
  data () {
    return {
      mock: mock,
      products: mock.books,
      detail: {},
      show: true
    }
  },
  methods: {
    getValueIndex (value) {
      this.show = value
    },
    getValueDisplay (value) {
      this.show = value
    }
  },
  components: {
    'front-nav': nav,
    'front-slide': slide,
    bestSeller,
    recommend,
    basicJs
  }
}
</script>
