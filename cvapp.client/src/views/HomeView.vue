<template>
  <div class="home">
    <v-carousel
        cycle
        show-arrows="hover"
        delimiter-icon="mdi-square"
    >
      <v-carousel-item src="@/assets/slide1.png" cover></v-carousel-item>
      <v-carousel-item src="@/assets/slide2.png" cover></v-carousel-item>
      <v-carousel-item src="@/assets/slide3.png" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapState, mapActions, mapMutations, mapGetters} from "vuex";

export default defineComponent({
  name: "HomeView",
  components: {},
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
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  destoryed() {
  },
});
</script>
