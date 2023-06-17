<template>
  <div id="LandingPage">
    <div class="lank">
      <div class="container">
        <div>
          <div class="row land pt-5">
            <div
              class="col-lg-8 col-sm-12 pt-5 con animate__backInLeft animate__animated animate__bounce"
            >
              <h1 class="fon">I am Chidinma Okwuoha,</h1>
              <h1 class="fon">a Product Designer</h1>
              <h1 class="fon">and a Frontend Developer</h1> 
              <p class="fr">
                I am a frontend developer and product design based in Lagos,Nigeria.
               <br> I code,design,develop,oversee websites and digital products.
              </p>
              <p></p>
              <p class="fr">
                <!-- <button class="btn btn-lg bu mt-5">Contact Me</button> -->
                <a href="#sect" class="btn btn-lg bu mt-4">Contact Me</a>
              </p>
            </div>
            <div
              class="col-lg-4 col-sm-12 animate__backInRight animate__animated animate__bounce"
            >
              <img
                src="../assets/apple-ios-15-cochlear-implant-memoji-removebg-preview 1.png"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  props: {},

  data() {
    return {};
  },

  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital@1&display=swap");

.bu {
  background-color: #15bf50;
   color: white;
}
.land {
  /*color: white;*/
  padding-top: 70px !important;
  padding-bottom: 40px !important;
}
.lank {
  /*background-color: black;*/
}
.con {
  font: Petrona; 
}
.fon {
  /* font-family: "Petrona", serif; */
  font-size: 53px;
  text-align: left;
}
.fr {
  text-align: left;
}
</style>