<template>
  <div class="">
    <!-- <h1>{{ mode }}</h1> -->
    <!-- <nav> -->
    <!-- <div class="nav-link">Home</div> -->
    <!-- <div class="nav-link">About</div> -->
    <!-- <div class="nav-link">Portfolio</div> -->
    <!-- <div class="nav-link">Contact</div> -->
    <!-- </nav> -->

    <div class="cf">
      <b-navbar toggleable="lg" class="vm">
        <b-navbar-brand href="#" class="brandco">CO.</b-navbar-brand>
        <ChidiTogglebutton
          :mode="mode"
          @toggle="$emit('toggle')"
          class="d-md-none"
        ></ChidiTogglebutton>
        <b-navbar-toggle
          id="nav-toggle-button"
          target="nav-collapse"
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto bnav">
            <b-nav-item href="#" class="ml-5" :to="{ name: 'home' }"
              >Home
            </b-nav-item>
            <b-nav-item href="#" class="ml-5" :to="{ name: 'about' }"
              >About
            </b-nav-item>
            <b-nav-item href="https://chidinmablog.hashnode.dev/" class="ml-5" target="_blank"
              >Blog</b-nav-item
            >
            <!-- <b-nav-item href="https://chidinmablog.hashnode.dev/" class="ml-5"
              >Dribble</b-nav-item
            > -->
            <b-nav-item href="https://github.com/Chidinma02" class="ml-5" target="_blank"
              >Github</b-nav-item
            >

            <!-- <a -->
            <!-- href="../assets/Chidinma's Resume (1).pdf" -->
            <!-- class="btn btn-lg butt pl-3 pr-3 ml-5 navi" -->
            <!-- >Download Cv</a -->
            <!-- > -->
            <a
              :href="pdflink"
              download="true"
              class="btn btn-lg butt pl-3 pr-3 ml-5 navi"
              >Download Cv</a
            >
            <ChidiTogglebutton
              :mode="mode"
              @toggle="$emit('toggle')"
              class="d-none d-lg-block se"
            ></ChidiTogglebutton>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import ChidiTogglebutton from "../components/ToggleButton";
import pdf from "../assets/Resume (4).pdf"
import "animate.css";
export default {
  name: "ChidiHeader",
  components: {
    ChidiTogglebutton,
  },
  props: ["mode"],

  data() {
    return {
      pdflink: pdf,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
nav {
  background-color:#F7FFF9  !important;

  transition: background 0.3s ease -in -out;
  color: black !important;
}

.dark nav {
  background-color: black !important;
  color: white !important;
}
.dark b-navbar-toggle {
  color: white;
  background-color: white;
}
b-nav-item:hover {
  background-color: #b0b0b0 !important;
}
.dark b-navbar {
  color: white !important;
  margin-left: 100px !important;
}
.dark b-navbar-toggle {
  color: white !important;
}

.dark b-nav-item {
  color: white !important;
}
.dark #nav-toggle-button {
  background-color: white;
}
.dark .nav-item.nav-item.nav-item a {
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-left: 50px;
}
.nav-item.nav-item.nav-item a {
  color: black;
  font-size: 17px;
  font-weight: bold;
  margin-left: 50px;
}

.dark .navbar-brand {
  color: white !important;
}
.brandco {
  font-size: 28px;
  font-weight: bold;
}
.vm {
  padding-left: 20px;
  padding-right: 20px;
}

@media (min-width: 767px) and (max-width: 2560px) {
  .dark .bnav {
    margin-left: 400px !important;
  }
  .bnav {
    margin-left: 350px !important;
  }
  .butt {
    margin-left: 20px;
  }
  .se {
    margin-left: 30px;
  }
}
.butt {
  border: 1px solid #15bf50;
  background-color:#15bf50;
  color:white;
}
.dark .butt {
  color: white !important;
  font-size: 17px !important;
  font-weight: bold !important;
}
a {
}
.navi {
  font-size: 17px !important;
  font-weight: bold !important;
}
</style>