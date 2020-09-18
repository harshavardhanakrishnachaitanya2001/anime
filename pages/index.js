import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <style jsx>
      {`
      img{
        display:inline;
        margin-left:auto;
        margin-right:auto;
        height:15rem;
        
      }
      `}
    </style>
      <Head>
        <title>Anime</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      </Head>
        <h1 className={styles.title}>
          The anime I love the most
        </h1>
        <p className={styles.description}>
          This is a site created using nextjs which tells the anime I love to watch. To be frank these are this site shows you the anime I regullarly
          watch every now and then to remove my stress and relax for a bit. I recommand the viewers of this site to watch these amazing anime
          to become stress free.
        </p>

        <img src='/title/Inuyasha.png' alt='Inuyasha'/>
        <img src='/title/DeathNote.jpg' alt='DeathNote'/>
        <img src='/title/Naruto.jpg' alt='Naruto'/>

    </div>
  )
}
