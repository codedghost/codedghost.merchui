import Category from "../../models/Category";

export default interface CategoryListProps {
    Categories: Category[];
    SetSelectedCategoriesCallback: (categories: Category[]) => void;
}