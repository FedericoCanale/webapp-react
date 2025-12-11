import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => {
                console.error("Errore nel caricamento del film:", err);
                setError(true);
            });
    }, [id]);

    if (error) {
        return <p>Errore nel caricamento del film.</p>;
    }

    if (!movie) {
        return <p>Caricamento...</p>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>

            {movie.description && <p>{movie.description}</p>}

            <h3>Recensioni</h3>

            <ul>
                {movie.reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.name}</strong>
                        {review.vote && ` (${review.vote}/5)`}: {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetailPage;