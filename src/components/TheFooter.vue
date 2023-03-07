<template>
  <footer>
    <div class="footer_wrapper">Test task for Frozeneon By <a href="https://t.me/denis3337" target="_blank">Denys Chyzhevskyi</a></div>
  </footer>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({})

</script>

<style lang="scss" scoped>

a {
  color: #fff;
  transition: all .2s;

&:hover {
   color: #FF876E;
  text-decoration: none;
 }
}

body {
  margin-bottom: 60px;
}
footer {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
}
.footer_wrapper {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>