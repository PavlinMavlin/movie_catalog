import {AppActionsType, AppRootStateType} from "../store";
import {ThunkAction} from "redux-thunk";
import {movieAPI, MovieSearchType, SearchType} from "../../api/api";


enum CONTACTS_ACTIONS_TYPES {
    SET_MOVIE = "SET_MOVIE",
    SET_SEARCH_TITLE = "SET_SEARCH_TITLE",
    SET_NEW_CURRENT_PAGE = "SET_NEW_CURRENT_PAGE",
    SET_REQUEST_STATUS = "SET_REQUEST_STATUS",

}


const initialState = {
    Search: [] as SearchType[],
    totalResults: "",
    title: "",
    page: 1,
    status: "idle" as RequestStatusType,
}


type InitialStateType = typeof initialState


export const movieReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case CONTACTS_ACTIONS_TYPES.SET_MOVIE:
            return {...state, ...action.movieState}
        case CONTACTS_ACTIONS_TYPES.SET_SEARCH_TITLE:
            return {...state, title: action.title}
        case CONTACTS_ACTIONS_TYPES.SET_NEW_CURRENT_PAGE:
            return {...state, page: action.page}
        case CONTACTS_ACTIONS_TYPES.SET_REQUEST_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


// actions
export const setMovieAC = (movieState: MovieSearchType) => (
    {type: CONTACTS_ACTIONS_TYPES.SET_MOVIE, movieState} as const)

export const setSearchTitleAC = (title: string) => (
    {type: CONTACTS_ACTIONS_TYPES.SET_SEARCH_TITLE, title} as const)

export const setNewCurrentPageAC = (page: number) => (
    {type: CONTACTS_ACTIONS_TYPES.SET_NEW_CURRENT_PAGE, page} as const)

export const setRequestStatusAC = (status: RequestStatusType) => {
    return {type: CONTACTS_ACTIONS_TYPES.SET_REQUEST_STATUS, status} as const
}

//thunk
export const fetchMovieTC = (title: string, page: number): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setRequestStatusAC("loading"))
            const res = await movieAPI.getMovie(title, page)
            dispatch(setRequestStatusAC("succeeded"))
            dispatch(setMovieAC(res.data))

            debugger
        } catch (error) {
            dispatch(setRequestStatusAC("failed"))
            console.log(error)
        } finally {
            // some code...
        }
    }


//types

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type MovieReducersActionTypes = ReturnType<typeof setMovieAC>
    | ReturnType<typeof setSearchTitleAC>
    | ReturnType<typeof setNewCurrentPageAC>
    | ReturnType<typeof setRequestStatusAC>


