function minato(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    height:200px;
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .minatoSummary{
                    margin-left:32rem;
                }
                `}
            </style>
            <img src='/Minato.png' alt='Minato Namikaze'/>
            <p className='minatoSummary'>
                <b>Full Name:</b> <i>Minato Namikaze</i><br />
                <b>Eye color:</b> <i>Blue</i><br />
                <b>Hair color:</b> <i>Yellow</i><br />
                <b>Residence:</b> <i>Konoha</i><br />
                <b>Skills:</b> <i>instant Transportation, Rasengan, hand-to-hand combat</i><br />
                <b>Chakra type:</b> <i>Wind</i><br />
                <b>Summoning animals:</b> <i>Toad</i><br />
                <b>Additional powers:</b> <i>Nine tails jinchuriki</i><br />
                <b>Occupation:</b> <i>Formar Hokage and sansai of Sakashi</i>
            </p>
        </div>
    )
}
export default minato