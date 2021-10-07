import style from "../header/Header.module.css"
import {SearchInput} from "../input/SearchInput";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {setSearchTitleAC} from "../../redux/reducer/movie-reducer";

export function Header() {
    const dispatch = useDispatch()
    const setSearchValue = useCallback((newSearchTitle: string) => {
        dispatch(setSearchTitleAC(newSearchTitle))
    }, [dispatch])

    return (
        <header className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.catalog}>
                    <h1> Movie catalog </h1>
                </div>
                <SearchInput onKeyPressEnter={setSearchValue}/>
                <div>
                    <span>Nikolay Borisenko</span>

                </div>
            </div>

        </header>
    )
}