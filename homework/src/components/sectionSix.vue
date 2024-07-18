<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="5" class="v-col">
        <h6>Tincidunt vitae semper quis lectus nulla at volutpat</h6>
        <div class="move-right">
          <h1>
            Building a Legacy of Success
          </h1>
          <p>
            Ac turpis egestas sed tempus urna. Semper viverra nam libero justo. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Varius quam quisque id diam vel quam elementum. Quam elementum pulvinar etiam non quam. Sit amet nisl suscipit adipiscing bibendum. Commodo elit at imperdiet dui accumsan sit.
          </p>
          <p>Egestas maecenas pharetra convallis posuere. In hendrerit gravida rutrum quisque non tellus orci ac. Quam vulputate dignissim suspendisse in est.</p>
          <v-btn>READ MORE</v-btn>
        </div>
      </v-col>
      <v-col cols="12" xl="5" class="v-col">
        <img src="https://picsum.photos/300/200/?random=10">
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang='scss'>
.v-container{
    .v-row{
    display: flex;
    justify-content: space-around;

    .v-col{
      h6 {
        font-size: 15px;
        font-weight: normal;
      }

      .move-right{
        width: calc(100% - 5rem);
        padding: 2rem 1rem;
        position: relative;
        left: 5rem;
        h1{
          margin-bottom: 1rem;
        }
        p{
          margin-bottom: 1rem;
        }
        .v-btn{
          border-bottom: 1px solid black;
        }
      }

      &:nth-child(2){
        background: yellow;
        padding: 2rem;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1280px) {
        width: 60vw;
  }
}

</style>
