import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container text-center col-12 col-sm-6 col-lg-2 mb-3 d-flex flex-column justify-content-between">
      <img
        className="movie-card-image poster-size"
        alt={title}
        src={posterPath}
      />
      <h1 className="movie-title me-0 fs-5 align-items-start">{title}</h1>
      <div className="d-flex flex-column align-items-center mt-2">
        <p className="movie-rating mb-0 ms-1 align-items-end">
          Rating: {voteAverage}
        </p>
        <button className="btn btn-outline-success" type="button">
          View Details
        </button>
      </div>
    </li>
  )
}

export default MovieCard
