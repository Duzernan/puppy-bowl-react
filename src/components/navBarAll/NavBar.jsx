import {Link} from 'react-router-dom'
import './NavBarStyle.css'

export default function Nav() {
    <div className= 'nav-all'>
        <div className= 'nav-title'>
            <h1> Puppy Bowl </h1>
        </div>

        <div className='nav-all-buttons'>
        <Link to='/'> Home </Link>
        <Link to='/allPlayers'> Players </Link>
        <Link to='/makePlayer'> Create Player </Link>

        </div>
    </div>

}