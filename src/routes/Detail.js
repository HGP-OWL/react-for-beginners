import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);

  return (
    <>
      <h1>Details</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h3> {movie.title}</h3>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
