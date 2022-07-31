import styles from "../../styles/Home.module.css";
import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "samir", name: "Samir" },
    { id: "max", name: "Max" },
  ];

  return (
    <div className={styles.container}>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/*<Link href={`/clients/${client.id}`}>{client.name}</Link>*/}
            <Link href={{
                pathname: '/clients/[id]',
                query: {
                    id: client.id,
                },
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
