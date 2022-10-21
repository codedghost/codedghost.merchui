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
        return category.id === id 
            ? property === "check" 
                ? {...category, selected: !category.selected } as Category 
                : { ...category, isExpanded: !category.isExpanded}
            : category.children.some(x => x !== undefined) 
                ? {...category, children: category.children.map((c) => handleChangeMap(c, id, property))}
                : category;
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
        </>
    )
}

CategoryList.defaultProps = {
    Categories: [],
    SetSelectedCategoriesCallback: () => {}
} as CategoryListProps;

export default CategoryList;