<template>
  <!-- 圖片區 -->
  <!-- 動畫待編輯 -->
  <div id="photo-area">
    <img src="https://picsum.photos/400/600/?random=1" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-offset="200">
    <img src="https://picsum.photos/400/600/?random=2" data-aos="fade-up" data-aos-easing="ease-out-quad" data-aos-duration="2000" data-aos-offset="200" data-aos-delay="2000">
    <img src="https://picsum.photos/400/600/?random=3" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="200" data-aos-delay="1000">
  </div>
  <!-- 文字區 -->
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        We are one of the largest construction and development companies in the world, and we want to improve society and the future through our efforts and expertise.
      </v-col>
      <v-col cols="12" md="6">
        Etiam et nunc scelerisque, venenatis turpis quis, tempor nunc. Nunc in bibendum arcu. Nulla sed velit imperdiet ex sollicitudin scelerisque. Maecenas et ligula enim. Integer pretium, metus ac fringilla congue, mauris diam faucibus leo, quis ornare enim. Sed porttitor consequat massa, in volutpat dui tristique non. In rhoncus tortor fermentum
        <br>
        <v-btn variant="outlined" rounded="xl">
          More
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// 引入 AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>

<style scoped lang="scss">
#photo-area{
  display: flex;
  justify-content: center;
  img{
    width: 300px;
    height: 450px;
    &:nth-child(1){
      margin-top: -50px;
      position: relative;
      left: 100px;
    }
    &:nth-child(2){
      margin-top: 50px;
      z-index: 3;
    }
    &:nth-child(3){
      margin-top: -100px;
      position: relative;
      right: 80px;
    }
  }
}

// @media (min-width: 960px) {
//   .v-container{
//     width: 60vw;
//   }
// }

.v-container{
  width: 90vw;
  margin-top: 1rem;
  .v-btn{
    margin-top: 1rem;
  }
  @media (min-width: 960px) {
      width: 60vw;
    }
}
</style>
