<template>
  <div class="app" :class="mode">
    <!-- <h1>hello world</h1> -->
    <ChidiHeader :mode="mode" @toggle="toggle"> </ChidiHeader>
    <h2>uuu</h2>
  </div>
</template>

<script>
import ChidiHeader from "./components/Header";
export default {
  name: "app",

  components: {
    ChidiHeader,
  },

  data() {
    return {
      mode: "white",
    };
  },

  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  color: black !important;
}
.dark {
  background-color: black;
  color: white !important;
}
</style>