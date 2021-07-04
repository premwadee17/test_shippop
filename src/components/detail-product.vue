<template lang="">
  <div>
    <div class="row" style="margin: 0px 120px;">
      <div class="col-md-6">
        <img :src="data.image" style="width: 100%;" />
      </div>
      <div class="col-md-6">
        <h2><strong>{{data.name}}</strong></h2>
        <div><strong>ผู้เขียน : {{data.writer}}</strong></div>
        <div><strong>สำนักพิมพ์ : {{data.publisher}}</strong></div>
        <div><strong>หมวดหมู่ : {{data.category}}</strong></div>
        <div><strong>ประเภทสินค้า : {{data.type}}</strong></div>
        <div><strong>บาร์โค้ด : {{data.barcode}}</strong></div>

        <div style="padding: 40px 0px;">
          <span style="font-size: 20px;
                font-weight: bold;">
            ราคา
          </span>
          <span style="font-size: 35px;
                font-weight: bold;">
            THB{{data.price}}
          </span>
          <span style="text-decoration: line-through;
                font-size: 22px;
                font-weight: bold;
                color: #ddd;">
            THB{{data.price_full}}
          </span>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <input type="number" value="1" class="form-control"
                  style="background-color: #ddd;
                  height: 50px;"  />
          </div>
          <div class="col-sm-4">
            <button type="button" class="btn btn-primary"
                    style="border-radius: 30px;
                    width: 160px;
                    height: 50px;">
              <strong style="color: #ffff;">Add</strong>
            </button>
          </div>
          <div class="col-sm-4">
            <button type="button" class="btn btn-warning"
                    style="border-radius: 30px;
                    width: 160px;
                    height: 50px;">
            <span style="color: #ffff;">
              <i class="fas fa-heart" ></i>
              <strong> Wishlist</strong>
            </span>
            </button>
          </div>
          <div class="col-12">
            แชร์ : <img :src="`${url}/social.png`" style="width: 150px;" />
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <img  v-for="(img, index) in data.images"
              :src="img.url"
              class="img-thumbnail"
              :key="index"
              style="width: 130px;" >
      </div>
    </div>
    <div style="margin: 0px 120px;">
      <ul class="nav nav-tabs" id="myTab" role="tablist"
          style="border-bottom: none;">
        <li class="nav-item" role="presentation">
          <button class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style="">
            เกี่ยวกับสินค้า
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false">
            รายละเอียด
          </button>
        </li>
      </ul>
    </div>
    <hr />
    <div  class="tab-content" id="myTabContent"
          style="margin-top: 35px;">
      <div  class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            style="margin: 0px 120px;">
        <strong>รายละเอียด : </strong>{{data.about}}
      </div>
      <div  class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
            style="margin: 0px 120px;">
        {{data.detail}}
      </div>
    </div>
    <div style="padding-top: 30px;">
      <concerned  :products="products"
                  :showHover="true" />
    </div>
  </div>
</template>
<script>
import concerned from './concerned'
export default {
  name: 'detail-product',
  data () {
    return {}
  },
  props: [
    'data',
    'url',
    'products'
  ],
  components: {
    concerned
  }
}
</script>
<style scoped>
  input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    padding: .5rem 0 1px;
    border-bottom: 2px solid  blue;
  }
  .nav-tabs .nav-link {
    border: transparent;
  }
</style>
