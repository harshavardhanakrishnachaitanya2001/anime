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
                }
                `}
            </style>
            <nav>
                <ul>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/inuyasha'><a>Inuyasha</a></Link></li>
                    <li><Link href='/deathnote'><a>Death Note</a></Link></li>
                    <li><Link href='/naruto'><a>Naruto</a></Link></li>
                    <li><Link href='/attackontaitan'>Attack on Taitan</Link></li>
                    <li><Link href='/thetimeigotreincarnatedintoaslime'>The time I got reincarnated into a slime</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar