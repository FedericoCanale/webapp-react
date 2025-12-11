import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                setMovies(res.data);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    if (error) {
        return <p>Errore nel caricamento dei film.</p>;
    }

    return (
        <div>
            <h2 className="mb-4">Lista film</h2>

            {/* Griglia Bootstrap */}
            <div className="row g-3">
                {movies.map((movie) => (
                    <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                        <Link
                            to={`/movies/${movie.id}`}
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100">

                                {/* Immagine */}
                                {movie.image && (
                                    <img
                                        src={`http://localhost:3000/img/movies_cover/${movie.image}`}
                                        className="movie-card-img"
                                        alt={movie.title}
                                    />
                                )}

                                {/* Titolo */}
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;