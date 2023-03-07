<template>
  <router-view></router-view>

  <BottomNavbar/>

</template>

<script>

import BottomNavbar from './components/TheFooter.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {
    BottomNavbar
  }
})
</script>