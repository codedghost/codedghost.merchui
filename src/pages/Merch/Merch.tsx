import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CategoryList from "../../components/CategoryList/CategoryList";
import ProductList from "../../components/ProductList/ProductList";
import Category from "../../models/Category";
import Product from "../../models/Product";

function Merch() {
    const [categories, setCategories] = useState<Category[]>([{title: "test", id: 0, selected: true} as Category] as Category[])
    const [products, setProducts] = useState<Product[]>([] as Product[])
    
    return (
        <>
            <Row>
                <Col xs={3}>
                    <CategoryList Categories={categories} SetSelectedCategoriesCallback={setCategories} />
                </Col>
                <Col xs={9}>
                    <ProductList Categories={categories} Products={products} SetProductsCallback={setProducts} />
                </Col>
            </Row>
            <Row>
                {JSON.stringify(categories)}
            </Row>
        </>
    )
}

export default Merch;