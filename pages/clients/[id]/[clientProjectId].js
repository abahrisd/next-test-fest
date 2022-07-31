import {useRouter} from "next/router";
import Clients from '../../../styles/Clients.module.css';

function SelectedClientProjectPage() {
    const router = useRouter();
    const {id, clientProjectId} = router.query;

    return (
        <div>
            <h1>Selected client <span className={Clients.highlight}>{id}</span> page for project <span className={Clients.highlight}>{clientProjectId}</span></h1>
        </div>
    )
}

export default SelectedClientProjectPage;