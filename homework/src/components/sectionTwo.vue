<template>
  <div class="container">
    <h1 id="section02_title">Building a Legacy of Success</h1>
    <v-row>
      <!-- 卡片1 -->
      <v-col cols="12" md="6" xl="3">
        <v-card class="mx-auto card-odd" max-width="344">
          <v-card-text>
            <img src="https://picsum.photos/50/50/?random=10">
            <v-icon icon=""></v-icon>
            <p class="text-h4">STRATEGY</p>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </div>
          </v-card-text>
          <!-- More按鈕 -->
          <v-card-actions>
            <v-btn rounded="0" text="More" variant="text">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 卡片2 -->
      <v-col cols="12" md="6" xl="3">
        <v-card class="mx-auto card-even" max-width="344">
          <v-card-text>
            <img src="https://picsum.photos/50/50/?random=10">
            <p class="text-h4">RESULTS</p>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </div>
          </v-card-text>
          <!-- More按鈕 -->
          <v-card-actions>
            <v-btn rounded="0" text="More" variant="text">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 卡片3 -->
      <v-col cols="12" md="6" xl="3">
        <v-card class="mx-auto card-odd" max-width="344">
          <v-card-text>
            <img src="https://picsum.photos/50/50/?random=10">
            <p class="text-h4">EXPERTISE</p>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </div>
          </v-card-text>
          <!-- More按鈕 -->
          <v-card-actions>
            <v-btn rounded="0" text="More" variant="text">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 卡片4 -->
      <v-col cols="12" md="6" xl="3">
        <v-card class="mx-auto card-even" max-width="344">
          <v-card-text>
            <!-- icon待編輯 -->
            <img src="https://picsum.photos/50/50/?random=10">
            <p class="text-h4">SUPPORT</p>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </div>
          </v-card-text>
          <!-- More按鈕 -->
          <v-card-actions>
            <v-btn rounded="0" text="More" variant="text">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
#section02_title{
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
}

.v-row{
width: 90vw;
margin: auto;
  // display: flex;
  // justify-content: center;
}

.v-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background:lightgoldenrodyellow;
    color: black;
}
.v-btn{
    border-bottom: 1px solid black;
}

@media (min-width: 960px) {
  .v-row{
    width: 70vw;
    margin: auto;
  }
  .card-odd{
    margin-top: 80px;
    // background: chartreuse;
  }
  .card-even{
    // background: teal;
  }
}
</style>
