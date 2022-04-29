<template>
  <div>
    <!-- <h1>{{ mode }}</h1> -->
    <!-- <nav> -->
    <!-- <div class="nav-link">Home</div> -->
    <!-- <div class="nav-link">About</div> -->
    <!-- <div class="nav-link">Portfolio</div> -->
    <!-- <div class="nav-link">Contact</div> -->
    <!-- </nav> -->

    <div class="">
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
          <b-navbar-nav>
            <b-nav-item href="#" class="cg">Home</b-nav-item>
            <b-nav-item href="#" class="cg">About</b-nav-item>

            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <ChidiTogglebutton
              :mode="mode"
              @toggle="$emit('toggle')"
              class="d-none d-lg-block"
            ></ChidiTogglebutton>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import ChidiTogglebutton from "../components/ToggleButton";
export default {
  name: "ChidiHeader",
  components: {
    ChidiTogglebutton,
  },
  props: ["mode"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
nav {
  background-color: white !important;

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
}

.dark .navbar-brand {
  color: white !important;
}
.brandco {
  font-size: 30px;
  font-weight: bold;
}
.vm {
  padding-left: 20px;
  padding-right: 20px;
}
</style>