import {useRouter} from "next/router";

function OverallBlogPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Overall blog page - {router.query.slug.join(' ')}</h1>
        </div>
    )
}

export default OverallBlogPage;