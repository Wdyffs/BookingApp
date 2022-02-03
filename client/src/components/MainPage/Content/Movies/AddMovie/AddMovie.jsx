import react, {useEffect, useRef, useState} from "react";
import axios from "axios";
import style from "./addMovie.module.css"

const AddMovie = (props) => {
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);

    const [selectedActors, setSelectedActors] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])

    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const [isLoading, setLoading] = useState(true);

    const selectActors = useRef(null)
    const selectGenres = useRef(null)
    const titleRef = useRef(null)

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
                    : <form>
                        <p>
                            <input type="text" name="title" className={style.fieldTitle}
                                   onChange={(e) => setTitle(e.target.value)}/>
                            <label htmlFor="title">Title</label>
                        </p>
                        <p>
                            <input type="text" name="duration" className={style.fieldDuration}
                                   onChange={(e) => setDuration(e.target.value)}/>
                            <label htmlFor="duration">Duration</label>
                        </p>
                        <p>
                            <select name="actors[]" id="actors" multiple="multiple" className={style.actorsList}
                                    ref={selectActors} onChange={() => {
                                setSelectedActors([...selectActors.current.selectedOptions].map(o => {
                                    return {
                                        _id: o.value
                                    }
                                }))
                            }
                            }>
                                {actors.map((actor) => {
                                    return (
                                        <option value={`${actor._id}`}>{`${actor.firstName} ${actor.lastName}`}</option>)
                                })}

                            </select>
                        </p>
                        <p>
                            <select name="genres[]" id="genres" multiple="multiple" className={style.genresList}
                                    ref={selectGenres}
                                    onChange={(e) => {
                                        setSelectedGenres([...e.target.selectedOptions].map(o => ({
                                            _id: o.value
                                        })));
                                    }
                                    }>
                                {genres.map((genre) => {
                                    return (<option value={`${genre._id}`}>{`${genre.name}`}</option>)
                                })}

                            </select>
                        </p>
                        <p>
                            <input type="text" name="ImageUrl" className={style.fieldImageUrl}
                                   onChange={(e) => setImageUrl(e.target.value)}/>
                            <label htmlFor="imageUrl">Image URL</label>
                        </p>
                        <p>
                    <textarea name="description" className={style.fieldDescription}
                              onChange={(e) => setDescription(e.target.value)}/>
                            <label htmlFor="description">Description</label>
                        </p>

                        <button type="button" className={style.addMovie}
                                onClick={() => {
                                    addMovie(title, imageUrl, duration, selectedActors, selectedGenres, description, '12+')
                                }}>Add movie
                        </button>
                    </form>
            }
        </>
    )
}

export default AddMovie;