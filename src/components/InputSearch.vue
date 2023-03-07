<template>
  <form>
    <input type="text" placeholder="package name"/>
    <div class="icon">
    </div>
  </form>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({})

</script>

<style lang="scss">
form {
  width: 100%;
  padding: 0 60px;
  height: 55px;
  position: relative;

  @media (max-width: 767px) {
    padding: 0;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 55px 0 30px;
    border-radius: 30px;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-size: 18px;
  }
}

</style>