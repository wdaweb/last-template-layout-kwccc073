<template>
  <v-app>
    <!-- 頂部導覽列 -->
    <v-app-bar>
      <v-container class="d-flex align-center ">
        <div class="log">
          logo
        </div>
        <!-- 漢堡按鈕 -->
        <!-- 待編輯：將漢堡按鈕推到右邊 -->
        <v-app-bar-nav-icon class="ml-auto"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <div id="section01">
      <sectionOne></sectionOne>
    </div>

    <div id="section02">
      <sectionTwo></sectionTwo>
    </div>

    <div id="section03">
      <sectionThree></sectionThree>
    </div>

    <div id="section04">
      <sectionFour></sectionFour>
    </div>

    <div id="section05">
      <sectionFive></sectionFive>
    </div>

    <div id="section06">
      <sectionSix></sectionSix>
    </div>

    <div id="contactUs">
      <contactUs></ContactUs>
    </div>

    <div id="footer">
      <footerSection></footerSection>
    </div>

  </v-app>
</template>

<script setup>
// 解構
import { onMounted, nextTick } from 'vue'
// 引入元件
import sectionOne from '@/components/sectionOne'
import sectionTwo from '@/components/sectionTwo'
import sectionThree from '@/components/sectionThree'
import sectionFour from '@/components/sectionFour'
import sectionFive from '@/components/sectionFive'
import sectionSix from '@/components/sectionSix'
import contactUs from '@/components/contactUs.vue'
import footerSection from '@/components/footerSection.vue'

// 引入GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// 註冊ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick() // 在 DOM 加載完後才初始化 GSAP 動畫
  gsap.from("#section03", {
    scrollTrigger: {
      trigger: "#section03",
      markers: false, // 紅綠線標記
      start: 'center bottom', // 綠色線
      end: 'center bottom' // 紅色線
    },
    x: 750,
    rotation: 540,
    background: 'black',
    duration: 1,
    ease: 'ease-in'
  })
})

</script>

<style lang="scss">
// 沒有變色
body{
  background: wheat;
}
// 導覽列-----------------------------
.v-app-bar{
  height: 50px;
}
// Engineers & Contractors區域---------------
#section01{
  width: 100%;
  height: 80vh;
  margin-top: 50px;
  // top: 100px; //值待編輯
  // 圖片尺寸待編輯
  background: url(https://picsum.photos/1980/800/?random=10);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
}

// Building a Legacy of Success 區域---------------------
#section02{
  width: 100%;
  padding:50px 0px;
  background: white;
  color: black;
}

// Do you need professionals for your next construction project?---------------
#section03{
  padding: 15rem;
  text-align: center;
  background: white;
  color: black;
}

// 三張圖 + We are one of the largest construction....---------------------------
#section04{
  background: lightgoldenrodyellow;
  color: black;
}

// 六格--------------------------------------------------------------------------
#section05{
  padding: 100px 0px;
  color: black;
  background: white;
}

// Building a Legacy of Success
#section06{
  padding: 2rem;
  background: lightgray;
  color: black;
}

#contactUs{
  background: url('https://picsum.photos/1280/1680/?random=3') no-repeat center / cover;
  padding: 5rem 0;
}

#footer{
  padding: 5rem;
  text-align: center;
}
</style>
