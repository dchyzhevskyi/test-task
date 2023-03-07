import { defineStore } from "pinia";
import { getPackagesBySearch } from "@/utils/API"

export const useNpmPackages = defineStore({
  id: "NpmPackages",
  state: () => ({
    query: '',
    list: [],
    currentPage: 1
  }),
  persist: true,
  getters: {
    getList: (state) => state.list,
  },
  actions: {
    async updateList () {
      this.list = await getPackagesBySearch(this.query, this.currentPage)
    },
    setSearchQuery (query) {
      this.query = query
      this.updateList()
    },
    setCurrentPage (number) {
      this.currentPage = number
      this.updateList()
    }
  }
});