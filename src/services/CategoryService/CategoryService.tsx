import { arrayBuffer } from "stream/consumers";
import Category from "../../models/Category";
import { AxiosGet, AxiosPost } from "../UIApiHelperService";

export function GetCategories() {
    return AxiosGet<Category[]>("Category")
        .then((response) => {
            return SetSelected(response.data) as Category[];
        })
        .catch(() => {
            return {} as Category[];
        });
}

export function GetCategoryIds(categories: Category[]): number[] {
    var result = [] as number[];

    const recurse = (category: Category) => {
        if (category.selected) {
            console.log(category.id);
            result.push(category.id);
        }

        if (category.children && category.children.some(x => x !== undefined)) {
            console.log("checking children");
            result.push(...GetCategoryIds(category.children));
        }
    }

    categories.forEach(recurse);

    console.log(result);
    return result;
}

function SetSelected(categories: Category[]): Category[] {
    return categories.map((c) => {
        return {...c, selected: false, children: SetSelected(c.children)};
    });
}