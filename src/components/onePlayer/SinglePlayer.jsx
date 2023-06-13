import { useParams } from "react-router-dom";
import './SinglePlayer.css'

export default function SinglePlayer({puppies}) {
    const {puppyId} = useParams()

    const specificPuppy = puppies.filter((el) => {
        if (el.id == Number(puppyId)) {
            return el
        }
    })

    console.log(specificPuppy)
    return (
        <div className="single-all">
            <div className="puppy">
                <h1> Single Puppy </h1>
                <h1 className="puppy-name"> {specificPuppy[0].name}! </h1>
                <h1 className="puppy-breed"> {specificPuppy[0].breed} </h1>
                <h1 className="puppy-status"> {specificPuppy[0].status} </h1>
                <img className="single-image" src={specificPuppy[0].imageUrl} alt={`photo of ${specificPuppy[0].name}`} />

            </div>

        </div>

    )

}