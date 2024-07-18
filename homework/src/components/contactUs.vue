<template>
  <v-container>
    <v-row>
      <v-col class="v-col" cols="12" md="5">
        <div class="contacr-us">
          <v-card class="mx-auto">
            <h1>Contact Us</h1>
            <div class="text-fields">
              <v-text-field v-model="name" color="primary" label="Name" variant="underlined"></v-text-field>
              <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>
              <v-text-field v-model="message" color="primary" label="Message" variant="underlined"></v-text-field>
              <v-checkbox v-model="terms" color="secondary" label="I accept the Terms of Service"></v-checkbox>
            </div>

            <v-btn color="success">
              Complete Registration
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>

          </v-card>
        </div>
      </v-col>

      <!-- ------------------------- -->
      <v-col class="v-col" cols="12" md="5">
        <div id="CALL-US" class="formation">
          <h3>CALL US</h3>
          <p>1 (234) 567-891</p>
          <p>1 (234) 567-891</p>
        </div>

        <div id="LOCATION" class="formation">
          <h3>LOCATION</h3>
          <p>121 Rock Sreet, 21 Avenue,</p>
          <p>New York, NY 92103-9000</p>
        </div>

        <div id="OUR-TOP-SERVICES" class="formation">
          <h3>OUR TOP SERVICES</h3>
          <p>Project Management</p>
          <p>Site Preparation and Maintenance</p>
          <p>Subcontractor Assessment</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container{
  // background: darkcyan;
  padding: 3rem;
  width: 90vw;

  .v-row{
    display: flex;
    justify-content: space-around;

    .v-col{
      // background: white;
      text-align: center;
      // background: rebeccapurple;
      height: 50vh;
      display: flex;
      flex-direction: column;

      &:nth-child(1){
        justify-content: center;
        .v-card{
          background: white;
          color: black;
          box-shadow: 1px 1px 20px rgba(5, 5, 5, 0.603);
          padding: 1rem 2rem;
        }
      }

      &:nth-child(2){
        justify-content: space-between;
        h3{
          color: yellowgreen;
          text-shadow: 1px 1px 2px black;
        }
        p{
          color: white;
          text-shadow: 1px 1px 2px black;
        }
      }

    }
  }

  @media (min-width: 1280px) {
        width: 60vw;
  }
}

</style>

<script>
export default {
  data: () => ({
    name: null,
    email: null,
    Message: null,
    terms: false
  })
}
</script>
