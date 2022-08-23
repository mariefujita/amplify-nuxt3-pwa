/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      store_name
      phone
      region_id
      longitude
      latitude
      status
      start_time
      end_time
      sort
      keywords
      logo
      like
      clicks
      reviews
      store_desc
      created_at
      updated_at
      is_buy
      shop_url
      createdAt
      updatedAt
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        store_name
        phone
        region_id
        longitude
        latitude
        status
        start_time
        end_time
        sort
        keywords
        logo
        like
        clicks
        reviews
        store_desc
        created_at
        updated_at
        is_buy
        shop_url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
