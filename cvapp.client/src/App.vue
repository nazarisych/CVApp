<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import AppBar from "@/elements/AppBar.vue";
import router from "@/router";
export default defineComponent({
  name: "App",
  components: {AppBar},
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
    functionTemplate: function () {},
  },
  created() {},
  mounted() {
    router.push("/");
  },
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped lang="scss"></style>
<style lang="scss">

</style>