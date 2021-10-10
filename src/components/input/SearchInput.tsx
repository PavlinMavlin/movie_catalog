import {ChangeEvent, useCallback, useState, KeyboardEvent} from "react";
import style from "../input/SearchInput.module.css"

type SearchInputPropsType = {
    onKeyPressEnter: (value: string) => void
}

export const SearchInput = (props: SearchInputPropsType) => {

    const [searchTitleValue, setSearchTitleValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitleValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onKeyPressEnter(searchTitleValue.trim())
            setSearchTitleValue("")
        }
    }
    return (<div>
        <input value={searchTitleValue} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
               className={style.search}
        />
    </div>)
}