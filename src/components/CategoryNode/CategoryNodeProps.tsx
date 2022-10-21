import Category from "../../models/Category";

export default interface CategoryNodeProps {
    Category: Category;
    HandleUpdateCallback: (id: number, property: string) => void;
}