import { useCallback, useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=rating&order_by=asc&limit=50`,
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }, [rating]);
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const onChange = (event) => {
    setRating(event.target.value);
  };

  const ratings = Array.from({ length: 20 }, (_, i) => (i * 0.5).toFixed(1));

  return (
    <>
      <div className={styles.selectBox}>
        <label htmlFor="rating">Select Rating</label>
        <select id="rating" onChange={onChange} name="rating">
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.container}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
                rating={movie.rating}
                runtime={movie.runtime}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
