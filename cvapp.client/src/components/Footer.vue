<template>
  <v-footer color="primary">
    <v-row justify="center" no-gutters>
<!--      <v-container>-->
<!--        <v-row justify="center" no-gutters>-->
<!--          <v-col class="text-center" cols="3">-->
<!--            <p>products</p>-->
<!--          </v-col>-->
<!--          <v-col class="text-center" cols="3">-->

<!--          </v-col>-->
<!--          <v-col class="text-center" cols="3">-->
<!--            <p>about us</p>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>CVApp</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "Footer",
  components: {}
});
</script>