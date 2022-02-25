import React, {useEffect, useState} from "react";
import axios from "axios";
import AddCinema from "./AddCinema";

const AddCinemaWrapper = (props) => {
    const [cities, setCities] = useState([]);
    const [movies, setMovies] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getCities = async () => {
            const response = await axios.get("http://localhost:5000/cities/get");
            setCities(response.data.cities)
        }
        const getMovies = async () => {
            const response = await axios.get("http://localhost:5000/movie/movies")
            setMovies(response.data);
            setLoading(false)
        }
        getCities()
            .catch(console.error)
        getMovies()
            .catch( console.error);
    }, [])

    const addCinema = (name, imageUrl, city, address, movies, halls, seats) => {
        axios.post("http://localhost:5000/cinema/createCinema", {
            name, imageUrl, city, address, movies, halls, seats
        }).then(() => console.log('request send')).catch((e) => console.log(e.message))
    }
    return (
        <>
            {
                isLoading ? <span>Loading</span>
                    : <AddCinema addCinema={addCinema} cities={cities} movies={movies}/>
            }
        </>
    )
}

export default AddCinemaWrapper;