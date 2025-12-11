import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
            setMovie(res.data);
        });
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div>
            <h2>{movie.title}</h2>

            {/* Descrizione */}
            {movie.description && <p>{movie.description}</p>}

            <h3>Recensioni</h3>

            <ul>
                {movie.reviews.map((review) => (
                    <li key={review.id}>
                        {/* Autore */}
                        <strong>{review.name}</strong>

                        {/* Voto */}
                        {review.vote && ` (${review.vote}/5)`}

                        {/* Testo */}
                        : {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetailPage;