import style from "./MoviesList.module.css";
import {Movie} from "./Movie";
import {SearchType} from "../../api/api";

type MoviesListPropsType = {
    movie: Array<SearchType>
    title: string
    totalResults: string

}

export function MoviesList(props: MoviesListPropsType) {

    return (<div className={style.moviesBlock}>
            {props.movie.map(mv => <Movie
                key={mv.imdbID}
                name={mv.Title}
                year={mv.Year}
                imdbID={mv.imdbID}
                type={mv.Type}
                img={mv.Poster}
            />)
            }
        </div>
    )

}