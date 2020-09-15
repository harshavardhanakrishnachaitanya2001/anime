function orochimaru(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .orochimaruSummary{
                    margin-left:32rem;
                }
                `}
            </style>
            <img src='/Orochimaru.jpg' alt='Orochimaru'/>
            <p className='orochimaruSummary'>
                <b>Name:</b> <i>Orochimaru</i><br />
                <b>Eye color:</b> <i>Dark green</i><br />
                <b>Hair color:</b> <i>Brown</i><br />
                <b>Residance:</b> <i>Somewhere underground</i><br />
                <b>Additional responsibilities:</b> <i>Sansai to sasuke</i><br />
                <b>Summoning animals:</b> <i>Snakes</i><br />
                <b>Occupation:</b> <i>Researcher</i><br />
                <b>Other name:</b> <i>Third of the legendary sanin</i>
            </p>
        </div>
    )
}
export default orochimaru