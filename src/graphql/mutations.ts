/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
