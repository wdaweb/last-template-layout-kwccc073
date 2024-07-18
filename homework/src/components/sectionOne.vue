<template>
  <v-container>
    <v-row>
      <v-col class="v-col">
        <h1>Engineers & Contractors</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="v-col">
        <p>Vitae turpis massa sed elementum tempus egestas sed sed. Blandit massa enim nec dui nunc mattis enim.</p>
      </v-col>
    </v-row>
    <v-row id="section01-btns">
      <v-col class="v-col" cols="12" md="6" lg="3">
        <v-btn rounded="xl">
          Building
        </v-btn>
      </v-col>
      <v-col class="v-col" cols="12" md="6" lg="3">
        <v-btn rounded="xl">
          Commercial
        </v-btn>
      </v-col>
      <v-col class="v-col" cols="12" md="6" lg="3">
        <v-btn rounded="xl">
          Transportation
        </v-btn>
      </v-col>
      <v-col class="v-col" cols="12" md="6" lg="3">
        <v-btn rounded="xl">
          Industrial
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// 解構
import { onMounted } from 'vue'
// 引入gsap
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('#section01-btns', {
    opacity: 0,
    x: -1000,
    duration: 1
  })
})

</script>

<style scoped lang="scss">
.v-col{
    display: flex;
    justify-content: center;
    text-shadow: 1px 1px 5px black;
    h1{
        font-size: 50px;
    }

    p{
        font-size: 30px;
    }
}

.v-btn{
    background: gold;
    color: black;
    font-size: 20px;
    &:hover{
        background: white;
    }
}
</style>
