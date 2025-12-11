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

            <h3>Recensioni</h3>

            <ul>
                {movie.reviews.map((review) => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetailPage;