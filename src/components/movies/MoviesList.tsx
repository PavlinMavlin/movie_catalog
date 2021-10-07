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
            {props.movie.length === 0
                ? <div className={style.empty}>
                    <p>Movie list is empty. Please enter movie.</p>
                </div>
                : props.movie.map(mv => <Movie
                    key={mv.imdbID}
                    name={mv.Title}
                    year={mv.Year}
                    imdbID={mv.imdbID}
                    type={mv.Type}
                />)
            }
        </div>
    )

}