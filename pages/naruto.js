import Head from 'next/head'
function naruto(){
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <title>Naruto</title>
            </Head>
            <style jsx>
                {`
                    h1{
                        font-size:3.5rem;
                        color:black;
                        background-color:orange;
                        text-align:center;
                        margin-top:0px;
                        font-weight:bolder;
                    }
                    img{
                margin-top:0px;
                margin-left:50px;
                height:200px;
            }
            h5{
                margin-left:50px;
                font-weight:bold;
            }
                `}
            </style>
            <h1>Naruto</h1>
            <p style={{marginLeft:'15px', fontSize:'1.5rem'}}>Naruto is the anime which potrays the struggle that a ninja (shinobi) goes through to full fill his 
            dream to becom the head of the village (Hokage). This anime has a beautiful moral to 'never give up no matter the what'. The 
            art work done by the artists in this anime is extrodinory. All the emotions are perfectly potraied. In this anime, characters have 
            powers which come through chakras in their bodies. All the characters have their own powers and  distinct personalities.</p>
            <h2 style={{textAlign:'center', fontWeight:'bold'}}>characters:</h2>
            <div className='row'>
                <div>
                    <img src='/narutoImages/naruto.jpg' alt='Naruto Uzumaki'/>
                    <h5>Naruto Uzumaki: Nine tails <br />jinchuriki</h5>
                </div>

                <div>
                    <img src='/narutoImages/Sasuke.png' alt='Sasuke Uchiha'/>
                    <h5>Sasuke: Rogue ninja</h5>
                </div>

                <div>
                    <img src='/narutoImages/sakura.jpg' alt='Sakura Haruno'/>
                    <h5>Sakura Haruno: Medical ninja</h5>
                </div>

                <div>
                    <img src='/narutoImages/kakashi.jpg' alt='Kakashi Hatake'/>
                    <h5>Kakashi Hatake: Teacher to<br /> team 7</h5>
                </div>

                <div>
                    <img src='/narutoImages/Minato.png' alt='Minato Namikaze'/>
                    <h5>Minato Namikaze: Fourth <br />Hokage</h5>
                </div>

                <div>
                    <img src='/narutoImages/Jiraiya.jpg' alt='Jiraiya'/>
                    <h5>Jiraiya: Lagendry Sanin</h5>
                </div>

                <div>
                    <img src='/narutoImages/thirdhokage.jpg' alt='Sarutobi Hiruzen'/>
                    <h5>Sarutobi Hiruzen: Third <br />Hokage</h5>
                </div>

                <div>
                    <img src='/narutoImages/Tsunade.jpg' alt='Tsunade Senju'/>
                    <h5>Tsunade Senju: Fifth Hokage</h5>
                </div>

                <div>
                    <img src='/narutoImages/Orochimaru.jpg' alt='Orochimaru'/>
                    <h5>Orochimaru: Konoha's <br />Scientist</h5>
                </div>

                <div>
                    <img src='/narutoImages/Itachi.jpg' alt='Itachi Uchiha'/>
                    <h5>Itachi Uchiha: Hidden <br />protector of konoha</h5>
                </div>

                <div>
                    <img src='/narutoImages/KillerB.png' alt='KillerB'/>
                    <h5>KillerB: 8 Tails jinchuriki</h5>
                </div>

                <div>
                    <img src='narutoImages/Gara.jpg' alt='Gara'/>
                    <h5>Gara: One tail jinchuriki</h5>
                </div>



            </div>
        </div>
    )
}
export default naruto;