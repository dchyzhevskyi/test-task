<template>
  <div class="list-item">
    <div class="list-item_name">{{ name }}</div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    name: String
  }
})

</script>

<style lang="scss">

.list-item {
  padding: 15px;
  border: 1px solid #FF876E;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;
  color: #093728;
  transition: all .3s;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #FF876E;
    border-color: #FF876E;
  }
}
.list-item_name {
  font-size: 16px;
  font-weight: 700;
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>