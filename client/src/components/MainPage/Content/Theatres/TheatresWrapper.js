import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemas } from "../../../../asyncActions/getCinemas";
import {Theatres} from "./Theatres";

export const TheatresWrapper = (props) => {
    const dispatch = useDispatch();
    const cinemas = useSelector((state) => state.cinemas.cinemas);

    useEffect(() => dispatch(fetchCinemas()), []);

    return (
        <Theatres cinemas={cinemas} />
    );
};
