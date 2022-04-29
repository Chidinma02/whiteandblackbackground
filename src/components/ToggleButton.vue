<template>
  <div>
    <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
    <!-- <button -->
    <!-- :checked="mode === 'dark' ? 'checked' : false" -->
    <!-- @change="$emit('toggler')" -->
    <!-- > -->
    <!-- click me -->
    <!-- </button> -->
  </div>
</template>

<script>
export default {
  name: "ChidiTogglebutton",
  props: ["mode"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  -webkit-transition: 0.4s;
  transition: 0.4s;
  background: black !important;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: gray !important;
}
input:focus + toggler {
  box-shadow: 0 0 2px black !important;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translate(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>