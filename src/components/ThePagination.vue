<template>
  <div class="pagination">
    <ul>
      <li v-for="i in max" :key="i"
          @click="$emit('update', i)"
          :class="{'active': i === currentPage}"
          class="pagination_item">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    max: Number,
    currentPage: Number
  },
  emits: ['update']
})

</script>

<style lang="scss">

.pagination {
  margin-top: 60px;
}

.pagination ul {
  display: flex;
  justify-content: center;
}
.pagination_item {
  height: 50px;
  width: 50px;
  display: flex;
  line-height: 0;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background: #FF876E;
    border-color: #FF876E;
  }

  @media (max-width: 991px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
    font-size: 12px;
  }
}

.pagination_item:not(:last-child) {
  margin-right: 5px;
}
.pagination_item.active {
  opacity: 0.6;
  border-color: #FF876E;
}

</style>