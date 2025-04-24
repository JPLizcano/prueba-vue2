<template>
  <div id="app" v-cloak>
    <NavBar /> <!-- Menú siempre visible -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>