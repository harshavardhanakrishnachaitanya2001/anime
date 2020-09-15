function iruka(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .irukaSummary{
                    margin-left:31rem;
                }
                `}
            </style>
            <img src='/Iruka.png' alt='Iruka Umino'/>
            <p className='irukaSummary'>
                <b>Full Name:</b> <i>Iruka Umino</i><br />
                <b>Eye color:</b> <i>black</i><br />
                <b>Residence:</b> <i>Konoha</i><br />
                <b>Occupation:</b> <i>Elementry school sansai</i><br />
                <b>Hair color:</b> <i>Brown</i>
            </p>
        </div>
    )
}
export default iruka