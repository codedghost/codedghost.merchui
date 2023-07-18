import { useEffect, useState } from 'react'
import { SyncProduct } from '../../models/SyncProduct'
import { SyncVariant } from '../../models/SyncVariant'
import { GetProduct } from '../../services/ProductService/ProductService'
import { useParams } from 'react-router-dom'

export default function Product() {
    let { id } = useParams()
    const [product, setProduct] = useState<SyncProduct>({} as SyncProduct)
    const [variants, setVariants] = useState<SyncVariant[]>([] as SyncVariant[])

    useEffect(() => {
        if (id) {
            const parsedId = Number.parseInt(id)
            GetProduct(parsedId).then((response) => {
                setProduct(response.sync_product)
                setVariants(response.sync_variants)
            })
        }
    }, [id])

    return (
        <>
            <pre>{JSON.stringify(product)}</pre>
            <pre>{JSON.stringify(variants)}</pre>
        </>
    )
}
