<template>
  <v-container>
    <v-row>
      <v-col class="v-col" cols="12" md="4">
        <img src="https://picsum.photos/800/1200/?random=10">
      </v-col>
      <v-col class="v-col" cols="12" md="4">
        <h1>Motivation</h1>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <v-card-actions>
          <v-btn rounded="0" text="LEARN MORE" variant="text">LEARN MORE</v-btn>
        </v-card-actions>
      </v-col>
      <v-col class="v-col" cols="12" md="4">
        <img src="https://picsum.photos/800/1200/?random=10">
      </v-col>
      <v-col class="v-col" cols="12" md="4">
        <h1>Creativity</h1>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <v-card-actions>
          <v-btn rounded="0" text="LEARN MORE" variant="text">LEARN MORE</v-btn>
        </v-card-actions>
      </v-col>
      <v-col class="v-col" cols="12" md="4">
        <img src="https://picsum.photos/800/1200/?random=10">
      </v-col>
      <v-col class="v-col" cols="12" md="4">
        <h1>Positivity</h1>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <v-card-actions>
          <v-btn rounded="0" text="LEARN MORE" variant="text">LEARN MORE</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container{
  margin: auto;
  width: 80vw;
  padding: 0;

  .v-row{
    .v-col{
      padding: 0;
      .v-btn{
        border-bottom: 1px solid black;
      }

      &:nth-child(even){
        padding: 1rem;
      }
      &:nth-child(2){
        background: black;
        color: white;
        .v-btn{
        border-bottom: 1px solid white;
        }
      }
      &:nth-child(4),
      &:nth-child(6){
        background: lightgray;
      }

      img{
      width: 100%;
      height: 100%;
      object-fit:cover;
      }

      h1{
        margin-bottom: 1rem;
      }

      p{
        margin-bottom: 1rem;
      }
    }

  }

  @media (min-width: 1280px) {
      width: 50vw;
  }
}

</style>
