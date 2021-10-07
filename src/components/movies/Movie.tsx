import style from ".//Movie.module.css"

type MoviePropsType = {
    name: string
    year: string
    imdbID: string
    type: string
}

export function Movie(props: MoviePropsType) {
    return (
        <div className={style.movieBlock}>
            <div className={style.img}><img/></div>
            <div className={style.movieContainer}>
                <div><span>Name:{props.name.split(':')[0]}</span></div>
                <div><span>Year:{props.year}</span></div>
                <div><span>imdbID:{props.imdbID}</span></div>
                <div><span>Type:{props.type}</span></div>
            </div>

        </div>
    )
}