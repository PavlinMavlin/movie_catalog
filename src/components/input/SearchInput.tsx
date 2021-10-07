import {ChangeEvent, useCallback, useState, KeyboardEvent} from "react";


type SearchInputPropsType = {
    onKeyPressEnter: (value: string) => void
}

export const SearchInput = (props: SearchInputPropsType) => {

    const [searchTitleValue, setSearchTitleValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTitleValue(e.currentTarget.value)
    }

    const activate = () => {
        props.onKeyPressEnter(searchTitleValue.trim())
        setSearchTitleValue("")
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            activate()
        }
    }
    return (<div>
        <input value={searchTitleValue} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} autoFocus
               onBlur={activate} size={60}/>
    </div>)
}