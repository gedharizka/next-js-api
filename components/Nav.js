import navStyle from '../styles/Nav.module.css';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyle.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
            </ul>            
        </nav>
    )
}

export default Nav
