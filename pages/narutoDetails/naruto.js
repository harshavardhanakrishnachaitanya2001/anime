function naruto(){
    return (
        <div>
            <style jsx>
                {`
                    img{
                        display: block;
                        margin-left: auto;
                        margin-right: auto;

                    }
                    .narutoSummary{
                        margin-left:32rem;
                    }
                `}
            </style>
            <img src='/naruto.jpg'/>
            <p className='narutoSummary'>
                <b>Full Name:</b> <i>Naruto Uzumaki</i><br />
                <b>Eye color:</b> <i>Blue</i><br />
                <b>Hair color:</b> <i>Yellow</i><br />
                <b>Residence:</b> <i>Village hidden in the leaves (Konoha)</i><br />
                <b>Skills:</b> <i>Rasengan, Shadow clone Jutsu, Rasen shuriken, hand-to-hand combat</i><br />
                <b>Chakra type:</b> <i>Wind</i><br />
                <b>Summoning animals:</b> <i>Toads</i><br />
                <b>Additional power:</b> <i>Nine tails jinchuriki</i><br />
                <b>Additional responsibilities</b> <i>Sansai of Konohamaru</i>
            </p>
        </div>
    )
}
export default naruto