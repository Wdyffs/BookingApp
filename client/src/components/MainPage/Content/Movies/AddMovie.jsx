import react, {useEffect, useRef, useState} from "react";
import axios from "axios";
import style from "./addMovie.module.css"

const AddMovie = (props) => {
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedActors, setSelectedActors] = useState([])
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const select = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        axios.get("http://localhost:5000/actor/actors")
            .then((res) => {
                setActors(res.data.actors);
            })
        }, [])

    const addMovie = (title, imageUrl, duration,actors, description, ageRestriction) => {
        axios.post("http://localhost:5000/movie/sendmovie", {
            title, imageUrl, duration,actors, description, ageRestriction
        }).then(() => console.log('request send')).catch((e) => console.log(e.message))
    }
    return (
        <>
            <form>
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
                    <select name="actors[]" id="actors" multiple="multiple" className={style.actorsList} ref={select}>
                        {actors.map((actor) => {
                            return (<option value={`${actor._id}`}>{`${actor.firstName} ${actor.lastName}`}</option>)
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
                <button type="button" onClick={() => {
                    setSelectedActors([...select.current.selectedOptions].map(o => {
                        return {
                            _id: o.value
                        }
                    }))
                }}>Set actors to state</button>
                <button type="button" className={style.addMovie}
                        onClick={() => {
                            console.log(selectedActors)
                            console.log(actors)
                            addMovie(title, imageUrl, duration, selectedActors, description, '12+'  )
                        } }>Add movie </button>
            </form>
        </>
    )
}

export default AddMovie;