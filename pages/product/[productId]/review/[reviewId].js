import { useRouter } from "next/router"

function Review()  {
    const router = useRouter()
    const {productId ,reviewId} = router.query //productId file name ym shig bn
    return <h1>Review {reviewId} for product {productId}</h1>
}

export default Review
