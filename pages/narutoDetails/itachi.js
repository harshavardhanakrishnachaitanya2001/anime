function itachi(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .itachiSummary{
                    margin-left:34rem;
                }
                `}
            </style>
            <img src='/itachi.jpg' alt='Itachi Uchiha'/>
            <p className='itachiSummary'>
                <b>Full Name:</b> <i>Itachi Uchiha</i><br />
                <b>Eye color:</b> <i>Black (Sometimes red because of sharengan)</i><br />
                <b>Skills:</b> <i>Genjutsu, hand-to-hand combat, Shuirken jutsu</i><br />
                <b>Residence:</b> <i>Akatsuki organisation</i><br />
                <b>Origin:</b> <i>Konoha</i>
            </p>
            <p></p>
        </div>
    )
}
export default itachi