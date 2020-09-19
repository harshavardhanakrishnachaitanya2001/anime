import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <style jsx>
      {`
      img{
        height:15rem;
        cursor:pointer;
      }
      `}
    </style>
      <Head>
        <title>Anime</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      </Head>
        <h1 className={styles.title}>
          <b>The anime I love the most</b>
        </h1>
        <p className={styles.description}>
          This is a site created using nextjs, which tells the anime I love to watch. To be frank these are this site shows you the anime 
          I watch every now and then to remove my stress and relax for a bit. I recommand the viewers of this site to watch these amazing 
          anime to become stress free.
        </p>

        <div className='row'>
          <Link href='inuyasha'><img src='/title/Inuyasha.png' alt='Inuyasha'/></Link>
          <Link href='/deathnote'><img src='/title/DeathNote.jpg' alt='DeathNote'/></Link>
          <Link href='/naruto'><img src='/title/Naruto.jpg' alt='Naruto'/></Link>
        </div>

    </div>
  )
}
