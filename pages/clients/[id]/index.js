import {useRouter} from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

  return (
    <div>
        <h1>Client projects page for {router.query.id}</h1>
    </div>
  )
}

export default ClientProjectsPage;