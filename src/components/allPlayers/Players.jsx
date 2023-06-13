import { Link } from "react-router-dom";
import { useState } from "react";
import './AllPlayersStyle.css'

export default function Players({puppies}) {
    const [searchQuery, setSearchQuery] = useState('')

    let filteredPuppies = puppies.filter((puppy) => {
        let lowerCasePuppy = puppy.name.toLowerCase()
        let lowerCaseSearch = searchQuery.toLowerCase()

        if(lowerCasePuppy.includes(lowerCaseSearch)) {
            return puppy
        }

    })

    return (
        <div className="puppy-player-all">
            <form>
                <label htmlFor='search-query'> Search For Puppy</label>
                <input
                name='search-query'
                type='text'
                placeholder='Puppy Name'
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}></input>
            </form>

            <h1 className="playing-the-bowl"> Starting Lineup </h1>
            <div className="starters">
                {filteredPuppies.map((el) => {

                    return (
                        <div className="single-player-starter" key={el.id}>
                            <h2> {el.name} </h2>
                            <Link to={`/allPlayers/${el.id}`}> <button className="puppy-button"> See More Details </button></Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )

}

