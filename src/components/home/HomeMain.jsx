import { Link } from 'react-router-dom';
import './HomeStyle.css'

export default function Home() {
    return (
        <div className= 'background'>
            <h1> Welcome To The Puppy Bowl </h1>

            <Link to = '/allPlayers'><button className='button'> Start </button></Link>
        </div>

    )

}