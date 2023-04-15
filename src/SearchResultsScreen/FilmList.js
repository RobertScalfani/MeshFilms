import React from "react";
import FilmListItem from "./FilmListItem";

const FilmList = (props) => {

    const films = props.films;

    return (
        <ul className='list-group'>
            {films.map(film => {
            return (
                <FilmListItem
                    film={film}
                />
            );
        })}
        </ul>
    );
}

export default FilmList;