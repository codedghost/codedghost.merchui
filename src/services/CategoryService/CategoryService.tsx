import { arrayBuffer } from "stream/consumers";
import Category from "../../models/Category";
import { AxiosGet, AxiosPost } from "../UIApiHelperService";

export function GetCategories() {
    return AxiosGet<Category[]>("Category")
        .then((response) => {
            return response.data as Category[];
        })
        .catch(() => {
            return {} as Category[];
        });
}

export function GetCategoryIds(categories: Category[]): number[] {
    var result = [] as number[];

    const recurse = (category: Category) => {
        if (category.selected) result.push(category.id);

        if (category.children && category.children.some(x => x !== undefined)) {
            GetCategoryIds(category.children);
        }
    }

    categories.forEach(recurse);

    return result;
}