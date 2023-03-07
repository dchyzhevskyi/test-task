<template>
  <main>
    <div class="wrapper">
      <h1>Search for <span>npm</span> packages</h1>
      <div class="input-block">
        <InputSearch @input="(event) => packagesStore.setSearchQuery(event.target.value)"/>
      </div>
      <div v-if="!packagesStore.getList.length" class="result-not-found">
        No search results found
      </div>
      <div v-else class="result-list">
        <ListItem v-for="item in packagesStore.getList"
                  @click="openPackageModal(item.name)"
                  :name="item.name"
                  :key="item.bandwidth"></ListItem>
      </div>

      <ThePagination :max="10" :currentPage="packagesStore.currentPage"
                     @update="(i) => packagesStore.setCurrentPage(i)"/>
    </div>
  </main>

  <PackageModal v-show="isModalOpen" :data="packageInfo" @close="closePackageModal"/>
</template>

<script>

import {defineComponent, onMounted, ref} from "vue";
import InputSearch from "@/components/InputSearch";
import ListItem from "@/components/ListItem";
import ThePagination from "@/components/ThePagination";
import PackageModal from "@/components/PackageModal";
import {useNpmPackages} from "@/store/npmPackages";
import {getPackageInfo} from "@/utils/API";

export default defineComponent({
  components: {InputSearch, ListItem, ThePagination, PackageModal},
  setup() {
    const packagesStore = useNpmPackages()
    const isModalOpen = ref(false)
    const packageInfo = ref({})

    onMounted(() => {
      packagesStore.updateList()
    })

    const openPackageModal = async (packageName) => {
      packageInfo.value = await getPackageInfo(packageName);
      isModalOpen.value = true;
    }
    const closePackageModal = () => {
      isModalOpen.value = false;
    }

    return {packagesStore, isModalOpen, openPackageModal, closePackageModal, packageInfo}
  },
})

</script>

<style lang="scss" scoped>

main {
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
  margin-bottom: 60px;
}

h1 span {
  color: #FF876E;
}

.wrapper {
  padding-top: 120px;
  padding-bottom: 120px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.result-list {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media (max-width: 576px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

.result-not-found {
  padding: 60px 0;
  text-align: center;
}

</style>