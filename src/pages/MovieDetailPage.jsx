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
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                </div>
            </div>
        );
    }
    function renderStars(vote) {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                stars.push(
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                );
            } else {
                stars.push(
                    <i key={i} className="bi bi-star text-warning"></i>
                );
            }
        }

        return stars;
    }
    return (
        <div className="movie-detail">

            <h2 className="mb-3">{movie.title}</h2>

            {movie.image && (
                <img
                    src={`http://localhost:3000/img/movies_cover/${movie.image}`}
                    alt={movie.title}
                    className="movie-detail-img mb-4"
                />
            )}

            <h3 className="mb-2">Descrizione</h3>
            <p className="mb-4">{movie.abstract}</p>

            <h3 className="mb-2">Recensioni</h3>

            <ul className="list-unstyled mt-3">
                {movie.reviews.map((review) => (
                    <li key={review.id} className="review-item mb-3 pb-2 border-bottom">
                        <strong>{review.name}</strong>

                        {review.vote && (
                            <span className="ms-2">
                                {renderStars(review.vote)}
                            </span>
                        )}

                        <p className="mb-0">{review.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetailPage;