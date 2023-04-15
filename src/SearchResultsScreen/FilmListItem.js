import React from "react";
import {Link} from "react-router-dom";

const FilmListItem = (props) => {

    const film = props.film;

    return (
        <Link to={'/details/' + film.id} className='list-group-item'>
          <div className='d-flex'>
              {film.primaryImage ?
                  <img src={film.primaryImage.url} style={{height: '150px'}}/>
                  :
                  <div>
                      No image available.
                  </div>
              }
              <div>
                  <div className='fw-bold'>
                      {film.titleText.text}
                  </div>
                  <div className='fw-light'>
                      {film.releaseYear.year}
                  </div>
              </div>
          </div>
      </Link>
    );
}

export default FilmListItem;
