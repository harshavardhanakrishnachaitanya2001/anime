function sasuke(){
    return (
        <div>
        <style jsx>
        {`
            img{
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
                .sasukeSummary{
                margin-left:32rem;
            }
        `}
        </style>
        <img src='/sasuke.png' alt='Sasuke Uchiha'/>
        <p className='sasukeSummary'>
            <b>Full name:</b> <i>Sasuke Uchiha</i><br />
            <b>Eye color:</b> <i>Black (occationally red => sharengan)</i><br />
            <b>Hair color</b> <i>Ligt black</i><br />
            <b>Residance:</b> <i>Konoha</i><br />
            <b>Skills:</b> <i>Sharengan, Fire jutsu, shuriken jutsu, hand-to-hand combat</i><br />
            <b>Chakra types:</b> <i>Fire and lightning</i><br />
            <b>Summoning animals:</b> <i>Snakes</i><br />
            <b>Additional powers:</b> <i>Curse mark</i>
        </p>
        </div>
    )
}
export default sasuke