import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
function Movie({
  id,
  coverImg,
  title,
  summary,
  genres,
  year,
  rating,
  runtime,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.movie__img}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>

      <div className={styles.movie__short}>
        <h2>{title}</h2>
        <table>
          <tbody>
            <tr>
              <td>Year</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>{rating.toFixed(1)}/10</td>
            </tr>
            <tr>
              <td>Runtime</td>
              <td>{runtime !== 0 ? `${runtime}min` : 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        <span>
          <strong>[Genres]</strong>
        </span>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>

      <div className={styles.movie__desc}>
        <p>
          {summary.length !== 0 ? (
            summary.length > 300 ? (
              `${summary.slice(0, 300)}...`
            ) : (
              summary
            )
          ) : (
            <span style={{ color: 'gray' }}>No Summary Is Found :&#40;</span>
          )}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
