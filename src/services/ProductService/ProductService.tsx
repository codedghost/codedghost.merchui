import { GetSyncProductResponse } from '../../models/GetSyncProductResponse'
import Product from '../../models/Product'
import ProductRequest from '../../models/ProductRequest'
import { AxiosGet, AxiosPost } from '../UIApiHelperService'

export function GetProducts(categoryIds: number[]) {
    return AxiosPost<ProductRequest, Product[]>('Product', {
        CategoryIds: categoryIds,
    } as ProductRequest)
        .then((response) => {
            return response.data as Product[]
        })
        .catch(() => {
            return {} as Product[]
        })
}

export function GetProduct(productId: number) {
    return AxiosGet<GetSyncProductResponse>(`Product/${productId}`)
        .then((response) => {
            return response.data as GetSyncProductResponse
        })
        .catch(() => {
            return {} as GetSyncProductResponse
        })
}
