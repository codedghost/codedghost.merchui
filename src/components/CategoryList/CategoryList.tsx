import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Category from "../../models/Category";
import { GetCategories } from "../../services/CategoryService/CategoryService";
import CategoryNode from "../CategoryNode/CategoryNode";
import CategoryListProps from "./CategoryList.Props";

import './CategoryList.scss';

function CategoryList(props: CategoryListProps) {
    const [categoryListContent, setCategoryListContent] = useState<JSX.Element[]>(([]));

    useEffect(() => {
        GetCategories().then((data) => {
            props.SetSelectedCategoriesCallback(data as Category[]);
        });
    }, [])

    useEffect(() => {
        setCategoryListContent(props.Categories.map((c) => categoryListMap(c)));
    }, [props.Categories])

    const handleChange = (id: number, property: string) => {
        if (props.Categories !== undefined) {
            const updatedCategories = props.Categories.map((c) => handleChangeMap(c, id, property));

            props.SetSelectedCategoriesCallback(updatedCategories);
        }
    };
    
    const handleChangeMap = function(category: Category, id: number, property: string): Category {
        if (category.id === id) {
            if (property === "check") {
                return {...category, selected: !category.selected } as Category;
            } else {
                return { ...category, isExpanded: !category.isExpanded}
            }
        } else {
            if (category.children.some(x => x !== undefined)) {
                return {...category, children: category.children.map((c) => handleChangeMap(c, id, property))} as Category
            } else {
                return category;
            }
        }
    }
    
    var categoryListMap = function(category: Category): JSX.Element {
        return (
            <CategoryNode Category={category} HandleUpdateCallback={handleChange} />
        );
    }

    return (
        <>
            <Form>
                {categoryListContent}
            </Form>
            {JSON.stringify(props.Categories)}
        </>
    )
}

CategoryList.defaultProps = {
    Categories: [],
    SetSelectedCategoriesCallback: () => {}
} as CategoryListProps;

export default CategoryList;