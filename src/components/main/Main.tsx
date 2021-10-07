import style from "../main/Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {SearchType} from "../../api/api";
import {useEffect} from "react";
import {fetchMovieTC} from "../../redux/reducer/movie-reducer";
import {MoviesList} from "../movies/MoviesList";
import {Pagination} from "@material-ui/lab";

export function Main() {
    const movie = useSelector<AppRootStateType, Array<SearchType>>(state => state.movieReducer.Search)
    const dispatch = useDispatch()
    const title = useSelector<AppRootStateType, string>(state => state.movieReducer.title)
    const totalResults = useSelector<AppRootStateType, string>(state => state.movieReducer.totalResults)


    useEffect(() => {
        dispatch(fetchMovieTC(title))
    }, [dispatch, title])


    return (<div className={style.mainBlock}>
        <div className={style.search}>
            <h2>Your search for: {title}, {totalResults} results found</h2>
        </div>
        <div className={style.mainContainer}>
            <MoviesList movie={movie} title={title} totalResults={totalResults}/>
        </div>
        {movie.length > 0
            ? <div className={style.pagination}>
                <Pagination count={10}/>
            </div>
            : ""}

    </div>)
}