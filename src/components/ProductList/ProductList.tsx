import { useEffect } from "react";
import Product from "../../models/Product";
import { GetCategoryIds } from "../../services/CategoryService/CategoryService";
import { GetProducts } from "../../services/ProductService/ProductService";
import HomepageButton from "../HomepageButton/HomepageButton";
import ProductListProps from "./ProductList.Props";

function ProductList(props: ProductListProps) {
    useEffect(() => {
        if (props.Categories !== undefined) {
            var categoryIds = GetCategoryIds(props.Categories);

            GetProducts(categoryIds).then((data) => {
                props.SetProductsCallback(data as Product[]);
            });
        }
    }, [props.Categories])

    var productsContent = props.Products && props.Products.some(x => x !== undefined) ? 
        props.Products.map((p) => 
        (<HomepageButton ImgSrc={p.thumbnail_url} CardText={p.name} Link="/Merch" />)) : <></>

    return (
        <div style={{display: "flex", flexWrap: "wrap", gap:"1rem"}}>
            {productsContent}
        </div>
    )
}

ProductList.defaultProps = {
    Categories: [],
    Products: [],
    SetProductsCallback: () => {}
} as ProductListProps

export default ProductList;