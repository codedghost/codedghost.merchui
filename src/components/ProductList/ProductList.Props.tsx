import Category from "../../models/Category";
import Product from "../../models/Product";

export default interface ProductListProps {
    Categories: Category[];
    Products: Product[];
    SetProductsCallback: (Products: Product[]) => void;
}