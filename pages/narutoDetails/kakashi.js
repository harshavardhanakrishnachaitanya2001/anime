function kakashi(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                }
                .kakashiSummary{
                    margin-left:32rem;
                }
                `}
            </style>
            <img src='/kakashi.jpg'/>
            <p className='kakashiSummary'>
                <b>Full Name:</b> <i>Kakashi Hatake</i><br />
                <b>Eye color:</b> <i>black (Only one eye)</i><br />
                <b>Hair color:</b> <i>White</i><br />
                <b>Residance:</b> <i>Konoho</i><br />
                <b>Skills: </b> <i>Chidori, Mud wall, hand-to-hand combat</i><br />
                <b>Chakra type:</b> <i>Lightning and Earth</i><br />
                <b>Summoning animals:</b> <i>Dogs</i><br />
                <b>Additional powers:</b> <i>Sharengan in left eye</i><br />
                <b>Occupation:</b> <i>Sansai of team 7</i>
            </p>
        </div>
    )
}
export default kakashi