import { SyncProduct } from './SyncProduct'
import { SyncVariant } from './SyncVariant'

export interface GetSyncProductResponse {
    sync_product: SyncProduct
    sync_variants: SyncVariant[]
}
