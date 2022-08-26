import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Store {
  readonly id: string;
  readonly store_name: string;
  readonly phone?: string | null;
  readonly region_id?: number | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly status?: number | null;
  readonly start_time?: string | null;
  readonly end_time?: string | null;
  readonly sort?: number | null;
  readonly keywords?: string | null;
  readonly logo?: string | null;
  readonly like?: number | null;
  readonly clicks?: number | null;
  readonly reviews?: number | null;
  readonly store_desc?: string | null;
  readonly created_at?: number | null;
  readonly updated_at?: number | null;
  readonly is_buy?: number | null;
  readonly shop_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Store, StoreMetaData>);
  static copyOf(source: Store, mutator: (draft: MutableModel<Store, StoreMetaData>) => MutableModel<Store, StoreMetaData> | void): Store;
}