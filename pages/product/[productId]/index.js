import { useRouter } from "next/router"

function ProductDetail()  {
    const router = useRouter()
    const productId = router.query.productId //productId file name ym shig bn
    return (
        <h1>Detail about product {productId}</h1>
    );
}

export default ProductDetail
