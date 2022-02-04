import React, {useEffect, useState} from "react";
import axios from "axios";
import AddMovie from "./AddMovie";

const AddMovieWrapper = (props) => {
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getActors = async () => {
            const response = await axios.get("http://localhost:5000/actor/actors")
            setActors(response.data.actors);
        }
        const getGenres = async () => {
            const response = await axios.get("http://localhost:5000/genre/genres")
            setGenres(response.data.genres);
            setLoading(false)
        }
        getActors()
            .catch(console.error)
        getGenres()
            .catch( console.error);
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