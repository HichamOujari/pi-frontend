import Head from 'next/head'
import styles from '../../styles/admin/Home.module.css'
import SideBare from "../../components/sidebar";
import AdminContent from "../../components/AdminContent"
import ProviderComponent from "../../components/ProviderComponent"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Admin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <SideBare elementActive = {1}></SideBare>
      <ProviderComponent child = {<AdminContent />} />
    </div>
  )
}
