function jiraiya(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .jiraiyaSummary{
                    margin-left:33.5rem;
                }
                `}
            </style>
            <img src='/jiraiya.jpg' alt= 'Jiraiya'/>
            <p className='jiraiyaSummary'>
                <b>Name:</b> <i>Jiraiya</i><br />
                <b>Eye color:</b> <i>Black</i><br />
                <b>Hair color</b> <i>White</i><br />
                <b>Residance:</b> <i>Konoha</i><br />
                <b>Skills:</b> <i>Rasengan, hand-to-hand combat, </i><br />
                <b>Summoning animals:</b> <i>Tode</i><br />
                <b>Additional achivements:</b> <i>Author of th book 'Tales of a Gusty Ninja'</i><br />
                <b>Additional responsibilities:</b> <i>Sansai of Minato and Naruto</i><br />
                <b>Other name:</b> <i>One among the lagendry 3 (lagendry sanin)</i>
            </p>
        </div>
    )
}
export default jiraiya