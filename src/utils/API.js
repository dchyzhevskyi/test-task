import axios from "axios";
import serializeObject from "@/utils/serialize";

const url = 'https://2DEX96I6X9-3.algolianet.com/1/indexes/npm_search/query'
const url1 = 'https://data.jsdelivr.com/v1/packages/npm/'

const config = {
  headers: {
    "x-algolia-api-key": "ac5d1cd7ae1a1d7745f5cd037a3a6ca3",
    "X-Algolia-Application-Id": "2DEX96I6X9",
    "Content-Type": "application/json; charset=UTF-8"
  }
};

export function getPackagesBySearch (query, page) {
  return axios.post(
    url,
    {
      params: serializeObject({
        query,
        page
      })
    },
    config)
    .then(res => res.data.hits)
}
export function getPackageInfo (name) {
  return axios.get(
    url1+name)
    .then(res => res.data)
}