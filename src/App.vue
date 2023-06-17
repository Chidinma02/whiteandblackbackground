<template>
  <div class="app" :class="mode">
    <!-- <h1>hello world</h1> -->
    <!-- <appfooter v-if="!['login', 'register'].includes($route.name)"/> -->
    <ChidiHeader :mode="mode" @toggle="toggle" v-if="!$route.meta.hideNavbar"  ></ChidiHeader>

    <router-view />
    <WorkspaceJsonFooter v-if="!$route.meta.hideNavbar"  ></WorkspaceJsonFooter>
  </div>
</template>

<script>
import ChidiHeader from "./components/Header";
import WorkspaceJsonFooter from "./components/Footer";
import "animate.css";
export default {
  name: "app",

  components: {
    ChidiHeader,
    WorkspaceJsonFooter,
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
  overflow-x: hidden !important;
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
body {
  overflow-x: hidden;
  font-family: "Petrona", serif !important;
  font-style: normal !important;
}
.dark .last{
  background-color: black !important;
}.app .last{
  background-color:#F7FFF9 !important;
}
.app #LandingPage{
  background-color:#F7FFF9 !important;
}
.dark #LandingPage{
  background-color: black !important;
}

.app .rt{
  background-color:#F7FFF9 !important;
  
}

.dark .rt{
  background-color: black !important;
}
.app .ca{
  color: white !important;
}
.app .ca{
  color: black !important;
}
</style>