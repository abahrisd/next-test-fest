import {useRouter} from "next/router";

function PortfolioItemPage() {
    const router = useRouter();

    return (
        <div>
            <h1>Portfolio item page {router.query.itemId}</h1>
        </div>
    )
}

export default PortfolioItemPage;