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
            <h2>Lista film</h2>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;