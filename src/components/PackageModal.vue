<template>
  <div class="package-info-modal">
    <div class="package-info-modal_overlay"
         @click="$emit('close')"></div>
    <div class="package-info-modal_wrapper">
      <div class="package-info-modal_title">
        <h2>{{ data?.name }} <span class="package-info-modal_type">{{ data?.type }}</span></h2>
        <div class="tags">
          <template v-for="(value, key) in data?.tags" :key="key">
            <div class="item"><span>{{ key }}:</span> {{ value }}</div>
          </template>
        </div>
      </div>

      <h3>Versions:</h3>
      <div class="package-info-modal_versions">
        <template v-for="item in data?.versions" :key="item.version">
          <div class="item">
            <span>{{ item.version }}:</span>
            <a :href="item.links.entrypoints" target="_blank">entrypoints</a>,
            <a :href="item.links.self" target="_blank">self</a>,
            <a :href="item.links.stats" target="_blank">stats</a>,
          </div>
        </template>
      </div>

      <a :href="data?.links?.stats" target="_blank" class="package-info-modal_stats">stats</a>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    data: Object
  },
  emits: ['close']
})

</script>

<style lang="scss" scoped>

a {
  color: #FF876E;
  transition: all .2s;

  &:hover {
    color: #093728;
  }
}

h3 {
  font-size: 18px;
  font-weight: 600;
}

.package-info-modal_wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  min-height: 300px;
  z-index: 99;

  padding: 30px 40px;
  border: 1px solid #FF876E;
  border-radius: 15px;
  background: #fff;
  color: #093728;

  @media (max-width: 767px) {
    & {
      width: calc(100% - 30px);
      padding: 30px 20px;
    }
  }
}

.package-info-modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  z-index: 98;
}

.package-info-modal_title {
  margin-bottom: 30px;

  & .tags {
    padding-top: 10px;

    & .item {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 10px;
      background: #edf0f2;
      line-height: 10px;
      height: 20px;
      border-radius: 5px;
      font-size: 12px;
      padding: 5px;

      & > span {
        opacity: 0.6;
      }
    }
  }
}

.package-info-modal_stats {
  position: absolute;
  top: 30px;
  right: 30px;
}

.package-info-modal_type {
  font-size: 14px;
  color: #FF876E;
  vertical-align: top;
}

.package-info-modal_versions {
  padding: 15px 0;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: scroll;

  & .item {
    margin-bottom: 14px;

    & > a {
      font-size: 12px;
      vertical-align: middle;
    }

    & > span {
      margin-right: 15px;
    }
  }
}

</style>