<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
import AppBar from "@/components/AppBar.vue";
import router from "@/router";
import Footer from "@/components/Footer.vue"

export default defineComponent({
  name: "App",
  components: {AppBar, Footer},
  setup() {
    return {};
  },
  data: () => ({}),
  watch: {},
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
    functionTemplate: function () {
    },
  },
  created() {
  },
  mounted() {
    router.push("/");
  },
  unmounted() {
  },
  destoryed() {
  },
});
</script>

<style scoped lang="scss"></style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>