import Head from 'next/head'
function inuyasha(){
    return <div>
        <style jsx>
            {`
            h1{
                background-color:red;
                color:white;
                text-align:center;
                margin-top:0px;
            }
            p{
                font-size:1.5rem;
            }
            h2{
                text-align:center;
            }
            h5{
                margin-left:60px;
            }
            img{
                margin-top:0px;
                margin-left:50px;
                height:200px;
            }
            `}
        </style>
        <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        </Head>
        <h1>Inuyasha</h1>
        <p style={{marginLeft:'15px'}}>
            Inuyasha is a fudal fery tale which did not gain as much popularity as Nruto, but I personally loved the anime. In this anime, 
            the protagonist is a half demon born to a human and a demon. In this anime, you will find cool action, halorious comedy, 
            hart warming emotions and romance. The male protagonist and the female protagonist in this anime are from two different worlds 
            This is a must watch anime for all the youth.
        </p>
        <h2>Characters:</h2>
        <div className='row'>
            <div>
            <img src='/InuyashaCharacters/Inuyasha.png' alt='Inuyasha'/>
            <h5>Inuyasha: Half demon</h5>
            </div>

            <div>
            <img src='/InuyashaCharacters/Kagome.jpg' alt='Kagome'/>
            <h5>Kagome: Priestess</h5>
            </div>

            <div>
            <img src='/InuyashaCharacters/miroku.jpg' alt='Miroku'/>
            <h5>Miroku: Monk</h5>
            </div>

            <div>
            <img src='/InuyashaCharacters/sango.jpg' alt='Sango'/>
            <h5>Sango: Demon slayer</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/shipo.jpg' alt='shippo'/>
                <h5>Shippo: Fox demon</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/kirara.jpg' alt='Kirara'/>
                <h5>Kirara: Two tail feline</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/kikyo.png' alt='Kikyo'/>
                <h5>Kikyo: Priestess</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/kohaku.jpg' alt='Kohaku.jpg'/>
                <h5>Kohaku: Demon slayer</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/koga.png' alt='Koga'/>
                <h5>Koga: Wolf demon</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/sheshomaru.jpg' alt='Sheshomaru'/>
                <h5>Sheshomaru: <br />Full fledged <br />demon</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/jakin.jpg' alt='Jakin'/>
                <h5>Jakin: <br />Sheshomaru's <br />servent</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/rin.png' alt='Rin' style={{width:'250px'}}/>
                <h5>Rin: Human</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/Naraku.png' alt='Naraku'/>
                <h5>Naraku: Half demon</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/kagura.jpg' alt='Kagura'/>
                <h5>Kagura: Naraku's <br />incarnation</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/kanna.jpg' alt='Kanna' style={{width:'250px'}}/>
                <h5>Kanna: Naraku's incarnation</h5>
            </div>

            <div>
                <img src='/InuyashaCharacters/onigumo.jpg' alt='Onigumo'/>
                <h5>Onigumo: Before becoming <br />Naraku</h5>
            </div>

        </div>
    </div>

}
export default inuyasha;