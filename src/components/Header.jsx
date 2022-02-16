import '../styling/Header.css'
import { Link } from 'react-router-dom'

function Header()
{
    return (
        <header>
            <Link className='header-title' to='/'>
                <h1>Tour Mars</h1>
            </Link>
        </header>
    )
}

export default Header
