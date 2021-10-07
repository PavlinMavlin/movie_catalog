import {AppActionsType, AppRootStateType} from "../store";
import {ThunkAction} from "redux-thunk";
import {movieAPI, MovieSearchType, SearchType} from "../../api/api";


enum CONTACTS_ACTIONS_TYPES {
    SET_MOVIE = "SET_MOVIE",
    SET_SEARCH_TITLE = "SET_SEARCH_TITLE",

}


const initialState = {
    Search: [] as SearchType[],
    totalResults: "",
    title: "batman",
}


type InitialStateType = typeof initialState


export const movieReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case CONTACTS_ACTIONS_TYPES.SET_MOVIE:
            return {...state, ...action.movieState}
        case CONTACTS_ACTIONS_TYPES.SET_SEARCH_TITLE:
            return {...state, title: action.title}
        default:
            return state
    }
}


// actions
export const setMovieAC = (movieState: MovieSearchType) => (
    {type: CONTACTS_ACTIONS_TYPES.SET_MOVIE, movieState} as const)

export const setSearchTitleAC = (title: string) => (
    {type: CONTACTS_ACTIONS_TYPES.SET_SEARCH_TITLE, title} as const)


//thunk
export const fetchMovieTC = (title: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            debugger
            const res = await movieAPI.getMovie(title)
            dispatch(setMovieAC(res.data))
            debugger
        } catch (error) {
            console.log(error)
        } finally {
            // some code...
        }
    }


//types


export type MovieReducersActionTypes = ReturnType<typeof setMovieAC>
    | ReturnType<typeof setSearchTitleAC>


// export const removeContactAC = (id: number) => (
//     {type: CONTACTS_ACTIONS_TYPES.REMOVE_CONTACT, id} as const)
//
// export const addContactAC = (name: string, lastName: string, id: number) => (
//     {type: CONTACTS_ACTIONS_TYPES.ADD_CONTACT, name, lastName, id} as const)
//
// export const updateContactAC = (name: string, lastName: string, id: number) => (
//     {type: CONTACTS_ACTIONS_TYPES.UPDATE_CONTACT, id, name, lastName} as const)


// export const updateContactTC = (name: string, lastName: string, id: number): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
//     async (dispatch, getState) => {
//         try {
//             const res = await contactsAPI.updateContact(name, lastName, id)
//             dispatch(updateContactAC(res.data.name, res.data.job, id))
//
//         } catch (error) {
//             console.log(error)
//
//         } finally {
//             // some code...
//         }
//     }
// export const addCardTC = (name: string, lastName: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
//     async (dispatch, getState) => {
//         try {
//             const res = await contactsAPI.createContact(name, lastName)
//             dispatch(addContactAC(res.data.name, res.data.job, +(res.data.id)))
//         } catch (error) {
//             console.log(error)
//         } finally {
//             // some code...
//         }
//     }
// export const deleteContactTC = (id: number): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
//     async (dispatch, getState) => {
//         try {
//             const res = await contactsAPI.deleteContact(id)
//             dispatch(removeContactAC(id))
//         } catch (error) {
//             console.log(error)
//         } finally {
//             // some code...
//         }
//     }
//
// case CONTACTS_ACTIONS_TYPES.REMOVE_CONTACT: {
//     return {...state, data: state.data.filter(ct => ct.id !== action.id)}
// }
// case CONTACTS_ACTIONS_TYPES.ADD_CONTACT:
// const newContact: ContactType = {
//     id: +(action.id),
//     avatar: "",
//     email: "efwefwfwef@e.com",
//     first_name: action.name,
//     last_name: action.lastName
// }
// return {
//     ...state, data: [...state.data, newContact]
// }
// case CONTACTS_ACTIONS_TYPES.UPDATE_CONTACT:
// const contact = state.data.find(ct => ct.id === action.id);
// if (contact) {
//     contact.first_name = action.name;
//     contact.last_name = action.lastName;
// }
// return {...state, data: [...state.data]}
