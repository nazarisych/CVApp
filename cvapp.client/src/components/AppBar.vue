<template>
  <div>
    <v-app-bar app color="primary">
      <v-btn
          height="100%"
          flat
          density="compact"
          route to="/">
        <v-img src="/logo.png" width="40"/>
      </v-btn>

      <v-btn class="mx-2 text-none text-md-h6" route to="/about-us">About Us</v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppBar",
  components: {}
});
</script>
