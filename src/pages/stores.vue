<script setup lang="ts">
  import { API, graphqlOperation } from 'aws-amplify'
  import { ListStoresQuery } from '@/API'
  import { listStores } from '../graphql/queries'

  const { data: stores } = await useAsyncData('stores', async () => {
    const response = (await API.graphql(graphqlOperation(listStores))) as {
      data: ListStoresQuery
      errors: any[]
    }
    console.log(response)
    return response.data.listStores?.items
  })
</script>

<template>
  <div class="w-screen h-screen py-5 px-6">
    <h5 class="text-5xl font-semibold mb-5">Store List</h5>
    <div v-for="store in stores">
      <div class="mb-5 border-gray-400 border py-4 px-4 rounded">
        <h5 class="text-2xl">
          {{ store.store_name }}
        </h5>
        <div>電話番号：{{ store.phone }}</div>
        <div>営業時間：{{ store.start_time }}-{{ store.end_time }}</div>
        <div>いいね：{{ store.like }}</div>
        <div>レビュー：{{ store.reviews }}</div>
        <div>
          {{ store.store_desc }}
        </div>
        <a :href="store.shop_url" target="_blank">{{ store.shop_url }}</a>
      </div>
    </div>
  </div>
</template>
