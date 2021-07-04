<template lang="">
  <div>
    <div  :id="`carouselExampleControls_${name}`" class="carousel slide" data-bs-ride="carousel"
          style="margin: 0px 120px;">
      <div class="carousel-inner">
        <div  class="carousel-item active"
              style="width: 120%;
              margin-right: -20%;">
          <div class="card-group">
            <div  class="card"
                  v-for="(data) in products"
                  :key="data.id"
                  style="background-color: inherit;
                  border: none;
                  margin: 3px;"
                  @click="clickProduct(data)"
                  @mouseover="mouseover(data.id)"
                  @mouseout="activeHover = 0">
              <span :style="`color: ${data.stock ? ' #87B273;' : '#FF3333;'} font-size: 10px;`">
                <i :class="`fas fa-${data.stock ? 'check-circle' : 'times-circle'}`" ></i>
                {{data.stock ? 'มีสินค้า' : 'ไม่มีสินค้า'}}
              </span>
              <div style="text-align: right;">
                <img :src="data.image" class="card-img-top" style="padding: 0px 30px;">
                <span style="position: absolute;
                      top: 15px;
                      right: 0px;
                      border: 2px solid #ddd;
                      border-radius: 20px;
                      color: #ddd;
                      width: 30px;"
                      v-if="data.id === activeHover && showHover ? true : false">
                  <i  class="fas fa-heart"
                      style="position: relative;
                      top: 2px;
                      right: 5px;"></i>
                </span>
                <span style="position: absolute;
                      top: 45px;
                      right: 0px;
                      border: 2px solid #ddd;
                      border-radius: 20px;
                      color: #ddd;
                      width: 30px;"
                      v-if="data.id === activeHover && showHover ? true : false">
                  <i  class="fas fa-signal"
                      style="position: relative;
                      top: 0px;
                      right: 3px;"></i>
                </span>
              </div>
              <button type="button"
                      :class="`btn btn-warning`"
                      :style="`border-radius: 30px;
                      width: 160px;
                      height: 50px;
                      align-self: center;
                      background-color: #ffff;
                      border-radius: 30px;
                      border: 2px solid blue;
                      display: ${data.id === activeHover ? 'block;': 'none;'}`"
                      v-if="showHover">
                <span style="color: blue;">
                  <i class="fas fa-shopping-cart" ></i>
                  <strong> Add To Cart</strong>
                </span>
              </button>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <span v-for="(index) in star"
                          :key="index"
                          :style="`color: ${index  <= data.review ? '#EBAD3B;' : '#DDDD;'} font-size: 10px;`">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <div class="col-lg-6">
                    <div style="font-size: 13px; text-align: right;">Reviews ({{data.review}})</div>
                  </div>
                </div>
                <h5 class="card-title">{{data.name}}</h5>
                <p class="card-text">
                  <small class="text-muted" style="text-decoration: line-through;">THB{{data.price_full}}</small>
                </p>
                <p class="card-text">THB{{data.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev"
              type="button"
              :data-bs-target="`#carouselExampleControls_${name}`"
              data-bs-slide="prev"
              style="width: 2%;
              justify-content: space-between;">
        <span class="carousel-control-prev-icon" aria-hidden="true"
              style="border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
              height: 40px;
              background-color: grey;
              width: 20px;
              font-weight: bold;"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next"
              type="button"
              :data-bs-target="`#carouselExampleControls_${name}`"
              data-bs-slide="next"
              style="width: 2%;
              justify-content: flex-end;">
        <span class="carousel-control-next-icon" aria-hidden="true"
              style="border-top-left-radius: 20px;
              border-bottom-left-radius: 20px;
              height: 40px;
              background-color: grey;
              width: 20px;
              font-weight: bold;"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      star: 5,
      activeHover: 0
    }
  },
  props: [
    'products',
    'showHover',
    'name'
  ],
  methods: {
    clickProduct (data) {
      this.$emit('click-product', data)
    },
    mouseover (id) {
      console.log('mouseover')
      this.activeHover = id
    }
  }
}
</script>
<style>
  .card:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 3px #ddd;
  }
  .carousel-control-next-icon:after {
    font-size: 55px;
  }
  .carousel-control-prev-icon:after {
    font-size: 55px;
  }
</style>
