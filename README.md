[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/aMHx-K_k)
檔案App.vue：使用GSAP套件
步驟
1. 安裝GSAP：在終端機輸入指令npm i GSAP
2. 引入GSAP、註冊ScrollTrigger
    ```
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger)
    ```
3. 使用
    ```
    onMounted(async () => {
      await nextTick()
      gsap.from("#section03", {
        scrollTrigger: {
          trigger: "#section03",
          markers: true, // 紅綠線標記
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
    ```

檔案sectionOne.vue：使用GSAP套件
步驟
1. 安裝GSAP：在終端機輸入指令npm i GSAP
2. 引入GSAP：
    ```
    import { gsap } from 'gsap'
    ```
3. 使用GSAP：
    ```
    onMounted(() => {
      gsap.from('#section01-btns', {
        opacity: 0,
        x: -1000,    
        duration: 1
      })
    })
    ```

檔案sectionFour.vue：使用aos套件
步驟
1. 安裝aos：在終端機輸入指令npm i aos
2. 引入aos：
    ```
    import AOS from 'aos'
    import 'aos/dist/aos.css'
    ```
3. 使用aos：在要加動畫的標籤加上以下屬性
    * data-aos 動畫種類
    * data-aos-easing 動畫的速度曲線
    * data-aos-duration 動畫持續時間
    * data-aos-offset 動畫觸發的偏移量
    * data-aos-delay 動畫延遲時間
