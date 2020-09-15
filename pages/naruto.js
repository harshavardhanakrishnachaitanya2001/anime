import Link from 'next/link'
import Head from 'next/head'
function naruto(){
    return (
        <div>
            <Head>
                <title>Naruto</title>
            </Head>
            <style jsx>
                {`
                    h1{
                        font-size:3.5rem;
                        color:black;
                        background-color:orange;
                        text-align:center;
                    }
                    img{
                        margin-left:25px;
                        height:200px;
                        margin-bottom:5px;
                        cursor:pointer;
                    }
                    h5{
                        margin-left:25px;
                    }
                    .naruto{
                        margin-left:25px;
                    }
                `}
            </style>
            <h1>Naruto</h1>
            <p style={{marginLeft:'15px'}}>Naruto is the anime which potrays the struggle that a ninja (shinobi) goes through to full fill his 
            dream to becom the head of the village (Hokage). This anime has a beautiful moral to 'never give up no matter the what'. The 
            art work done by the artists in this anime is extrodinory. All the emotions are perfectly potraied. I highly recommand people 
            visiting this site to watch Naruto</p>
            <Link href='narutoDetails/naruto'><img src='/naruto.jpg' alt='Naruto Uzumaki'/></Link>
            <h5>Naruro Uzumaki</h5>
            <Link href='narutoDetails/sasuke'><img src='/sasuke.png' alt= 'Sasuke Uchiha'/></Link>
            <h5>Sasuke Uchiha</h5>
            <Link href='narutoDetails/sakura'><img src='/sakura.jpg' alt='Sakura Haruno'/></Link>
            <h5>Sakura Haruno</h5>
            <Link href='narutoDetails/kakashi'><img src='/kakashi.jpg' alt='Kakashi Hatake'/></Link>
            <h5>Kakashi Hatake</h5>
            <Link href='narutoDetails/minato'><img src='/Minato.png' alt='Minato Namikaze'/></Link>
            <h5>Minato Namikaze</h5>
            <Link href='narutoDetails/iruka'><img src='/Iruka.png' alt='Iruka Umino'/></Link>
            <h5>Iruka Umino</h5>
            <Link href='narutoDetails/itachi'><img src='/Itachi.jpg' alt='Itachi Uchiha'/></Link>
            <h5>Itachi Uchiha</h5>
            <Link href='narutoDetails/jiraiya'><img src='/Jiraiya.jpg' alt='Jiraiya'/></Link>
            <h5>Jiraiya</h5>
            <Link href='narutoDetails/tsunade'><img src='/Tsunade.jpg' alt='Tsunade Senju'/></Link>
            <h5>Tsunade Senju</h5>
            <Link href='narutoDetails/orochimaru'><img src='/Orochimaru.jpg' alt='Orochimaru'/></Link>
            <h5>Orochimaru</h5>
        </div>
    )
}
export default naruto;