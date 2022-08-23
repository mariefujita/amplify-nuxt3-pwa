/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoreInput = {
  id?: string | null,
  store_name: string,
  phone?: string | null,
  region_id?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  status?: number | null,
  start_time?: string | null,
  end_time?: string | null,
  sort?: number | null,
  keywords?: string | null,
  logo?: string | null,
  like?: number | null,
  clicks?: number | null,
  reviews?: number | null,
  store_desc?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  is_buy?: number | null,
  shop_url?: string | null,
};

export type ModelStoreConditionInput = {
  store_name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  region_id?: ModelIntInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  status?: ModelIntInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  keywords?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  like?: ModelIntInput | null,
  clicks?: ModelIntInput | null,
  reviews?: ModelIntInput | null,
  store_desc?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  is_buy?: ModelIntInput | null,
  shop_url?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  store_name: string,
  phone?: string | null,
  region_id?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  status?: number | null,
  start_time?: string | null,
  end_time?: string | null,
  sort?: number | null,
  keywords?: string | null,
  logo?: string | null,
  like?: number | null,
  clicks?: number | null,
  reviews?: number | null,
  store_desc?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  is_buy?: number | null,
  shop_url?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoreInput = {
  id: string,
  store_name?: string | null,
  phone?: string | null,
  region_id?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  status?: number | null,
  start_time?: string | null,
  end_time?: string | null,
  sort?: number | null,
  keywords?: string | null,
  logo?: string | null,
  like?: number | null,
  clicks?: number | null,
  reviews?: number | null,
  store_desc?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  is_buy?: number | null,
  shop_url?: string | null,
};

export type DeleteStoreInput = {
  id: string,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  store_name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  region_id?: ModelIntInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  status?: ModelIntInput | null,
  start_time?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  keywords?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  like?: ModelIntInput | null,
  clicks?: ModelIntInput | null,
  reviews?: ModelIntInput | null,
  store_desc?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  is_buy?: ModelIntInput | null,
  shop_url?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  store_name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  region_id?: ModelSubscriptionIntInput | null,
  longitude?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  start_time?: ModelSubscriptionStringInput | null,
  end_time?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionIntInput | null,
  keywords?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  like?: ModelSubscriptionIntInput | null,
  clicks?: ModelSubscriptionIntInput | null,
  reviews?: ModelSubscriptionIntInput | null,
  store_desc?: ModelSubscriptionStringInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  updated_at?: ModelSubscriptionIntInput | null,
  is_buy?: ModelSubscriptionIntInput | null,
  shop_url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      store_name: string,
      phone?: string | null,
      region_id?: number | null,
      longitude?: string | null,
      latitude?: string | null,
      status?: number | null,
      start_time?: string | null,
      end_time?: string | null,
      sort?: number | null,
      keywords?: string | null,
      logo?: string | null,
      like?: number | null,
      clicks?: number | null,
      reviews?: number | null,
      store_desc?: string | null,
      created_at?: number | null,
      updated_at?: number | null,
      is_buy?: number | null,
      shop_url?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    store_name: string,
    phone?: string | null,
    region_id?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    status?: number | null,
    start_time?: string | null,
    end_time?: string | null,
    sort?: number | null,
    keywords?: string | null,
    logo?: string | null,
    like?: number | null,
    clicks?: number | null,
    reviews?: number | null,
    store_desc?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    is_buy?: number | null,
    shop_url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
