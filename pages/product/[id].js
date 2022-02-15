import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/detailProduct.module.css'
import Link from "next/link"

export default function DetailProduct() {

  const data = {
    img:"/shoes.png",
    title:"title",
    sousTitle:"",
    count:""
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Detail Product : {data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <nav className={styles.navbar}>
          <img src="/logo.png" alt="" className={styles.logo} />
          <div className={styles.right}>
            <Link href="http://localhost:3000/authentification/sign-in"><div className={styles.signin}><p>Espace Client</p></div></Link>
          </div>
        </nav>

        <header className={styles.header}>
          <ul>
            <li className={styles.active_header}>
              <i className="bi bi-person-fill"></i>
              <p>Clothing / Shoes</p>
            </li>
            <li>
              <i className="bi bi-music-note-beamed"></i>
              <p>Music</p>
            </li>
            <li>
              <i className="bi bi-spotify"></i>
              <p>Sport / LifeStyle</p>
            </li>
            <li>
              <i className="bi bi-phone"></i>
              <p>Electronique</p>
            </li>

            <li>
              <i className="bi bi-emoji-heart-eyes-fill"></i>
              <p>Mother Care</p>
            </li>

          </ul>
        </header>

        <main className={styles.main}>
          
        </main>
      </div>
    </div>
  )
}
