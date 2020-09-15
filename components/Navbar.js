import Link from 'next/link'
function Navbar(){
    return (
        <div>
            <style jsx>
                {`
                ul{
                    display:flex;
                    list-style:none;
                    justify-content:space-around;
                    background-color:black;
                    color:white;
                }
                `}
            </style>
            <nav>
                <ul>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/inuyasha'><a>Inuyasha</a></Link></li>
                    <li><Link href='/deathnote'><a>Death Note</a></Link></li>
                    <li><Link href='/naruto'><a>Naruto</a></Link></li>
                    <li><Link href='/attackontitan'>Attack on Titan</Link></li>
                    <li><Link href='/detectiveschoolq'>Detective school Q</Link></li>
                    <li><Link href='/thetimeigotreincarnatedasaslime'>The time I got reincarnated into a slime</Link></li>
                    <li><Link href='/bleach'><a>Bleach</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar