import react, {useEffect, useRef, useState} from "react";
import axios from "axios";
import style from "./addMovie.module.css"

const AddMovie = ({addMovie, actors, genres}) => {

    const [selectedActors, setSelectedActors] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])

    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [ageRestriction, setAgeRestriction] = useState('')

    const selectActors = useRef(null)

    const chooseSelectedActors = () => {
        setSelectedActors([...selectActors.current.selectedOptions].map(o => {
            return {
                _id: o.value
            }
        }))
    }
    const chooseSelectedGenres = (event) => {
        setSelectedGenres([...event.target.selectedOptions].map(o => ({
            _id: o.value
        })));
    }

    return (
        <form className={style.movieCreatingForm}>
            <p className={style.inputField}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className={style.fieldTitle}
                       onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="duration">Duration</label>
                <input type="text" name="duration" className={style.fieldDuration}
                       onChange={(e) => setDuration(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="actors[]">Image URL</label>
                <select name="actors[]" id="actors" multiple="multiple" className={style.actorsList}
                        ref={selectActors} onChange={() => chooseSelectedActors()}>
                    {actors.map((actor) => {
                        return (
                            <option value={`${actor._id}`}>{`${actor.firstName} ${actor.lastName}`}</option>)
                    })}
                </select>
            </p>
            <p className={style.inputField}>
                <label htmlFor="genres[]">Image URL</label>
                <select name="genres[]" id="genres" multiple="multiple" className={style.genresList}
                        onChange={e => chooseSelectedGenres(e)}>
                    {genres.map((genre) => {
                        return (<option value={`${genre._id}`}>{`${genre.name}`}</option>)
                    })}
                </select>
            </p>
            <p className={style.inputField}>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="ImageUrl" className={style.fieldImageUrl}
                       onChange={(e) => setImageUrl(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="description">Description</label>
                <textarea name="description" className={style.fieldDescription}
                          onChange={(e) => setDescription(e.target.value)}/>
            </p>
            <p className={style.inputField}>
                <label htmlFor="ageRestriction">Age Restriction</label>
                <select name="ageRestriction" id="ageRestriction"  className={style.ageRestriction}
                        onChange={e => setAgeRestriction(e.target.value)}>
                    <option value="0+">0+</option>
                    <option value="6+">6+</option>
                    <option value="12+">12+</option>
                    <option value="14+">14+</option>
                    <option value="16+">16+</option>
                    <option value="18+">18+</option>
                    <option value="21+">21+</option>
                </select>
            </p>

            <button type="button" className={style.addMovie}
                    onClick={() => {
                        addMovie(title, imageUrl, duration, selectedActors, selectedGenres, description, '12+')
                    }}>Add movie
            </button>
        </form>
    )
}

export default AddMovie;