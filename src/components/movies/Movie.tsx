import style from ".//Movie.module.css"

type MoviePropsType = {
    name: string
    year: string
    imdbID: string
    type: string
    img: string
}

export function Movie(props: MoviePropsType) {
    return (
        <div className={style.movieBlock}>
            <div><img alt="" className={style.img} src={props.img ? props.img : ""}/></div>
            <div className={style.movieContainer}>
                <div><p> Name:{props.name.split(':')[0]}</p></div>
                <div><p>Year:{props.year}</p></div>
                <div><p>imdbID:{props.imdbID}</p></div>
                <div><p>Type:{props.type}</p></div>
            </div>

        </div>
    )
}