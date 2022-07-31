import {useRouter} from "next/router";
import {useCallback} from "react";

function ClientProjectsPage() {
    const router = useRouter();
    const loadProject = useCallback(() => {
        router.push({
            pathname: '/clients/[id]/[projectId]',
            query: {
                id: 'samir',
                projectId: 'Project A'
            }
        })
    }, []);

  return (
    <div>
        <h1>Client projects page for {router.query.id}</h1>
        <button onClick={loadProject}>Load a project</button>
    </div>
  )
}

export default ClientProjectsPage;