import react, {useEffect, useRef, useState} from "react";
import axios from "axios";
import style from "./addCinema.module.css"

const AddCinema = ({addCinema, cities, movies}) => {

    const [selectedMovies, setSelectedMovies] = useState([]);

    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [halls, setHalls] = useState('');
    const [seats, setSeats] = useState('');
    const [city, setCity] = useState('');

    const chooseSelectedMovies = (event) => {
        setSelectedMovies([...event.target.selectedOptions].map(o => ({
            _id: o.value
        })));
    }

    return (
        <form className={style.movieCreatingForm}>
            <p className={style.inputField}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className={style.fieldName}
                       onChange={(e) => setName(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="imageUrl">Image Url</label>
                <input type="text" name="imageUrl" className={style.fieldImageUrl}
                       onChange={(e) => setImageUrl(e.target.value)}/>
            </p>
            {/* ! Need fetch cities from server */}

            <p className={style.inputField}>
                <label htmlFor="cities[]">City</label>
                <select name="cities[]" id="cities" className={style.citiesList}
                        onChange={(e) => setCity(e.target.value)}>
                    {cities.map((city) => {
                        return (
                            <option value={`${city._id}`}>{`${city.name}`}</option>)
                    })}
                </select>
            </p>
            <p className={style.inputField}>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" className={style.fieldAddress}
                       onChange={(e) => setAddress(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="movies[]">Movies</label>
                <select name="movies[]" id="movies" multiple="multiple" className={style.moviesList}
                        onChange={e => chooseSelectedMovies(e)}>
                    {movies.map((movie) => {
                        return (<option value={`${movie._id}`}>{`${movie.title}`}</option>)
                    })}
                </select>
            </p>

            <p className={style.inputField}>
                <label htmlFor="halls">Halls</label>
                <select name="halls" id="halls"  className={style.halls}
                        onChange={e => setHalls(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </p>
            <p className={style.inputField}>
                <label htmlFor="seats">Amount of seats</label>
                <input type="text" name="seats" className={style.seats}
                       onChange={(e) => setSeats(e.target.value)}/>
            </p>

            <button type="button" className={style.addCinema}
                    onClick={() => {
                        addCinema(name, imageUrl, city, address, selectedMovies, halls, seats)
                    }}>Add cinema
            </button>
        </form>
    )
}

export default AddCinema;