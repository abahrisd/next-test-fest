import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Hello next test fest!</h1>
        <ul>
            <li>
                {/* Send new HTTP send new HTTP request and drop state */}
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                {/* Wont send http reqeust, so state not dropped, also prefetch data on hover and so on */}
                <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link href="/clients">Clients</Link>
            </li>
        </ul>
    </div>
  )
}
