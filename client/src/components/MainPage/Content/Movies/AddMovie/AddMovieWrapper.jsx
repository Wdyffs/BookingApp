import react, {useEffect, useRef, useState} from "react";
import axios from "axios";
import AddMovie from "./AddMovie";

const AddMovieWrapper = (props) => {
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            await axios.get("http://localhost:5000/actor/actors")
                .then((res) => {
                    setActors(res.data.actors);
                })
            await axios.get("http://localhost:5000/genre/genres")
                .then(res => {
                    setGenres(res.data.genres);
                }).then(() => setLoading(false))
        } catch (e) {
            console.log(e.message)
        }
    }, [])

    const addMovie = (title, imageUrl, duration, actors, genre, description, ageRestriction) => {
        axios.post("http://localhost:5000/movie/sendmovie", {
            title, imageUrl, duration, actors, genre, description, ageRestriction
        }).then(() => console.log('request send')).catch((e) => console.log(e.message))
    }
    return (
        <>
            {
                isLoading ? <span>Loading</span>
                    : <AddMovie addMovie={addMovie} actors={actors} genres={genres}/>
            }
        </>
    )
}

export default AddMovieWrapper;