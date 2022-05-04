<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <WorkspaceJsonLanding></WorkspaceJsonLanding>
    <WorkspaceJsonFea></WorkspaceJsonFea>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import WorkspaceJsonLanding from "../components/Landing";
import WorkspaceJsonFea from "../components/fea";
// import WorkspaceJsonFooter from "../components/Footer";
export default {
  name: "HomeView",
  components: {
    WorkspaceJsonLanding,
    WorkspaceJsonFea,
    // WorkspaceJsonFooter,
  },
};
</script>

