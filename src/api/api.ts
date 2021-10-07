import axios from "axios"


const instance = axios.create({
    baseURL: "https://www.omdbapi.com/",
    //https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8 &s=Batman&page=2
    //https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8 &s=Batman&page=2
})
//API
export const movieAPI = {
    getMovie(title: string) {
        return instance.get(`?i=tt3896198&apikey=8523cbb8 &s=${title}&page=5`)
    },

}

//types
export  type GetMovieResponseType = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Array<RatingsType>,
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

type RatingsType = { Source: string, Value: string }

export type MovieSearchType = {
    Search: SearchType[],
    totalResults: string,
    "Response": string
}

export type SearchType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}