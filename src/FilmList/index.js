import React from "react";
import FilmListItem from "./FilmListItem";

const FilmList = (props) => {

    const films = props.films;

    if (!films || films.length < 1) {
        return (
            <ul className='list-group mb-5'>
                <li className='list-group-item'>
                    No films to show.
                </li>
            </ul>
        );
    }

    return (
        <ul className='list-group'>
            {films.map(film => {
            return (
                <FilmListItem
                    key={film.id}
                    film={film}
                />
            );
        })}
        </ul>
    );
}

export default FilmList;