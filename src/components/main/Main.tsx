import style from "../main/Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {SearchType} from "../../api/api";
import React, {ChangeEvent, useEffect} from "react";
import {
    fetchMovieTC,
    setSearchTitleAC,
    setNewCurrentPageAC,
    RequestStatusType
} from "../../redux/reducer/movie-reducer";
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
            <h2>Your search for: {title}, {totalResults} results found</h2>
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