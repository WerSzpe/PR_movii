import React from "react";

const MovieCardSmall = (props: any) => {
    return(
        <div className="singleMovieCard">
            <img className="moviePosterSmall" alt="..."/>
            <h4 className="movieTitleSmall">Tytuł</h4>
            <p className="movieDescSmall">Lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
    );
};

export default MovieCardSmall;