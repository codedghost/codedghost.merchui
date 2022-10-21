import Product from "../../models/Product";
import ProductRequest from "../../models/ProductRequest";
import { AxiosPost } from "../UIApiHelperService";

export function GetProducts(categoryIds: number[]) {
    return AxiosPost<ProductRequest, Product[]>("Product", { CategoryIds: categoryIds } as ProductRequest)
        .then((response) => {
            return response.data as Product[];
        })
        .catch(() => {
            return {} as Product[];
        });
}