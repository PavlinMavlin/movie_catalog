import style from "../main/Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import React, {useEffect} from "react";
import {fetchMovieTC, setNewCurrentPageAC} from "../../redux/reducer/movie-reducer";
import {MoviesList} from "../movies/MoviesList";
import {Pagination} from "@material-ui/lab";
import {CircularProgress} from "@material-ui/core"


export const Main = React.memo(() => {

    const dispatch = useDispatch()
    const {title, totalResults, page, status, Search} = useSelector((state: AppRootStateType) => state.movieReducer)

    const pagesCount = Math.ceil(+totalResults / 10)

    useEffect(() => {
        dispatch(fetchMovieTC(title, page))
    }, [dispatch, title, page])

    const onCurrentPageChangeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setNewCurrentPageAC(value))
    }


    if (status === "loading") {
        return <div style={{position: "fixed", top: "50%", left: "0%", textAlign: "center", width: "100%"}}>
            <CircularProgress
                size={70}
            />
        </div>
    }

    return (<div className={style.mainBlock}>
        <div className={style.search}>
            {Search.length > 0 ? <p>Your search for: {title}, {totalResults} results found</p>
                : <p>Movie list is empty. Please enter movie.</p>
            }
        </div>
        <div className={style.mainContainer}>
            <MoviesList movie={Search} title={title} totalResults={totalResults}/>
        </div>
        {Search.length > 0
            ? <div className={style.pagination}>
                <Pagination page={page} count={pagesCount} onChange={onCurrentPageChangeHandler}/>
            </div>
            : ""}
    </div>)
})