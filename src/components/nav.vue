<template lang="">
  <div>
    <nav  class="navbar navbar-expand-lg navbar-light bg-light"
          style="box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;">
      <div class="container-fluid" style="padding: 0px 120px;">
        <strong style="font-size: 25px;">
          <a class="navbar-brand" href="#" @click="clickIndex()">Book</a>
        </strong>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">สินค้าใหม่</a>
            <a class="nav-link" href="#">สินค้าขายดี</a>
            <a class="nav-link" href="#">สินค้าลดราคา</a>
            <a class="nav-link" href="#">สินค้าแนะนำ</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'nav',
  methods: {
    clickIndex () {
      this.$emit('click-index', true)
    }
  }
}
</script>
