function sakura(){
    return (
        <div>
            <style jsx>
                {`
                img{
                    display:block;
                    margin-right:auto;
                    margin-left:auto;
                }
                .sakuraSummary{
                    margin-left:32rem;
                }
                `}
            </style>
            <img src='/sakura.jpg'/>
            <p className='sakuraSummary'>
                <b>Full Name:</b> <i>Sakura Haruno</i><br />
                <b>Eye color:</b> <i>green</i><br />
                <b>Hair color:</b> <i>Pink</i><br />
                <b>Residance:</b> <i>Konoha</i><br />
                <b>Skills:</b> <i>Medical ninjutsu and chekra control</i><br />
                <b>Summoning animals:</b> <i>Slugs</i><br />
                <b>Name: </b> <i>Konoichi</i>
            </p>
        </div>
    )
}
export default sakura