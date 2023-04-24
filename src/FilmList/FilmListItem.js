import React from "react";
import {Link} from "react-router-dom";

const FilmListItem = (props) => {

    const film = props.film;

    return (
        <Link to={'/details/' + film.id} className='list-group-item'>
          <div className='d-flex'>
              {film.primaryImage ?
                  <img src={film.primaryImage.url} className='rounded border border-2 m-1' style={{height: '150px'}}/>
                  :
                  <div className='d-flex rounded border border-2 m-1 bg-dark bg-opacity-10 align-items-center align-content-center' style={{height: '150px', width: '150px'}}>
                      <h5 className='ps-3'>
                          No image available
                      </h5>
                  </div>
              }
              <div className='ms-4'>
                  <h4 className='fw-bold'>
                      {film.titleText.text}
                  </h4>
                  <div className='fw-light'>
                      {film.releaseYear.year}
                  </div>
              </div>
          </div>
      </Link>
    );
}

export default FilmListItem;
