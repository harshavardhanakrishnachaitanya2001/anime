import Head from 'next/head'
function deathnote(){
    return (
        <div>
            <style jsx>
                {`
                h1{
                    color:white;
                    background-color:black;
                    text-align:center;
                    margin-top:0;
                    padding-top:0;
                }
                img{
                    margin-left:25px;
                    height:200px;
                }
                h5{
                    margin-left:25px;
                    font-weight:bold;
                    text-align:center;
                }
                `}
            </style>
            <Head>
                <title>Death Note</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </Head>
            <h1>DeathNote</h1>
            <p style={{marginLeft:'15px', fontSize:'1.5rem'}}>Death Note is about a smart teenager leaving in japan. In the hopes of creating
            a world where only good people (whom he judges to be good) reside, he slowly gets converted into the antagonist. The name of 
            this antagonist is Light yagami. How Light plans to kill people and how the japanese police capture Light is what you have to find 
            out by watching this anime. This anime is a must watch for the people of all the ages.</p>
            <h2 style={{textAlign:'center'}}><b>Characters:</b></h2>
            <div className='row'>
                <div>
                    <img src='DeathNote/Light.jpg' alt='Light Yagami'/>
                    <h5>Light Yagami: Protagonist</h5>
                </div>

                <div>
                    <img src='DeathNote/L.jpg' alt='L'/>
                    <h5>L: Detective</h5>
                </div>

                <div>
                    <img src='DeathNote/SoichiroYagami.jpg' alt='SoichiroYagami'/>
                    <h5>Soichiro Yagami: <br />Police chief</h5>
                </div>

                <div>
                    <img src='DeathNote/misamisa.jpg' alt='misa misa'/>
                    <h5>Misa Misa: Light's <br />helper/lover</h5>
                </div>
                <div>
                    <img src='DeathNote/Ryuk.jpg' alt='Ryuk'/>
                    <h5>Ryuk: <br />Shinigami</h5>
                </div>

                <div>
                    <img src='DeathNote/Rem.jpg' alt='Rem'/>
                    <h5>Rem: Second <br />Shinigami</h5>
                </div>

                <div>
                    <img src='DeathNote/DeathNote.jpg' alt='Death Note'/>
                    <h5>Death Note: <br />Killing instrument</h5>
                </div>

                <div>
                    <img src='DeathNote/Near.jpg' alt='Near'/>
                    <h5>Near: L's replacement</h5>
                </div>
            </div>
        </div>
    )
}
export default deathnote