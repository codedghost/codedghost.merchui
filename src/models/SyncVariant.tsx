import { ItemOption } from './ItemOption'

export interface SyncVariant {
    id: number
    externalId: string
    sync_product_id: number
    name: string
    synced: boolean
    variant_id: number
    retail_price: string
    currency: string
    options: ItemOption[]
}
