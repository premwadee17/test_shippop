<template lang="">
  <div style="margin: 0px 120px;">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div style="background-color: #dddd; padding: 110px;"></div>
        </div>
        <div class="carousel-item">
          <div style="background-color: #dddd; padding: 110px;"></div>
        </div>
        <div class="carousel-item">
          <div style="background-color: #dddd; padding: 110px;"></div>
        </div>
      </div>
      <button class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
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
              data-bs-target="#carouselExampleControls"
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
  name: 'slide'
}
</script>

<style scoped>
  .carousel-control-next-icon:after {
    font-size: 55px;
  }
  .carousel-control-prev-icon:after {
    font-size: 55px;
  }
</style>
