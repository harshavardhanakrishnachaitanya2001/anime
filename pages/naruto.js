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
                        display:block;
                        margin-left:auto;
                        margin-right:auto;
                        height:200px;
                        margin-bottom:5px;
                    }
                    h5{
                        text-align:center;
                    }
                `}
            </style>
            <h1>Naruto</h1>
            <img src='/naruto.jpg' alt='Naruto Uzumaki'/>
            <h5>Naruro Uzumaki</h5>
            <img src='/sasuke.png' alt= 'Sasuke Uchiha'/>
            <h5>Sasuke Uchiha</h5>
            <img src='/sakura.jpg' alt='Sakura Haruno'/>
            <h5>Sakura Haruno</h5>
            <img src='/kakashi.jpg' alt='Kakashi Hatake'/>
            <h5>Kakashi Hatake</h5>
            <img src='/Minato.png' alt='Minato Namikaze'/>
            <h5>Minato Namikaze</h5>
            <img src='/Iruka.png' alt='Iruka Umino'/>
            <h5>Iruka Umino</h5>
            <img src='/Itachi.jpg' alt='Itachi Uchiha'/>
            <h5>Itachi Uchiha</h5>
            <img src='/Hinata.jpg' alt='Huga Hinata'/>
            <h5>Huga Hinata</h5>
            <img src='/Neji.jpg' alt='Huga Neji'/>
            <h5>Huga Neji</h5>
            <img src='/Jiraiya.jpg' alt='Jiraiya'/>
            <h5>Jiraiya</h5>
            <img src='/Tsunade.jpg' alt='Tsunade Senju'/>
            <h5>Tsunade Senju</h5>
            <img src='/Orochimaru.jpg' alt='Orochimaru'/>
            <h5>Orochimaru</h5>
        </div>
    )
}
export default naruto;