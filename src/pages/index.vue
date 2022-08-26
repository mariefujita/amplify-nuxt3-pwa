<script setup lang="ts">
  import { ListStoresQuery } from '@/API'
  import { withSSRContext } from 'aws-amplify'
  import { listStores } from '../graphql/queries'

  const { data: stores } = await useAsyncData(async () => {
    const SSR = withSSRContext()
    const response = (await SSR.API.graphql({ query: listStores })) as {
      data: ListStoresQuery
      errors: any[]
    }
    return response.data.listStores?.items
  })
</script>

<template>
  <div class="w-screen h-screen py-5 px-6">
    <div v-for="store in stores">
      <div class="mb-5 border-gray-400 border py-4 px-4 rounded">
        <h5>
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
