import style from "../header/Header.module.css"
import {SearchInput} from "../input/SearchInput";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {setSearchTitleAC} from "../../redux/reducer/movie-reducer";

export const Header = React.memo(() => {
    const dispatch = useDispatch()
    const setSearchValue = useCallback((newSearchTitle: string) => {
        dispatch(setSearchTitleAC(newSearchTitle))
    }, [dispatch])

    return (
        <div className={style.headerContainer}>
            <div>
                <h1> Movie catalog </h1>
            </div>
            <div>
                <SearchInput onKeyPressEnter={setSearchValue}/>
            </div>
            <div>
                <select >
                    <option >Nikolay Borisenko</option>
                    <option >Nikolay Borisenko</option>
                    <option >Cherry</option>
                </select>
            </div>
        </div>
    )
})