import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anime</title>
      </Head>
        <h1 className={styles.title}>
          Top 10 anime 
        </h1>

        <p className={styles.description}>
          Hello
        </p>
    </div>
  )
}
