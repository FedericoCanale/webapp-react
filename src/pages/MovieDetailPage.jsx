import { useParams } from "react-router-dom";

function MovieDetailPage() {
    const { id } = useParams();

    return (
        <div>
            <h2>Dettaglio film</h2>
            <p>ID film: {id}</p>
        </div>
    );
}

export default MovieDetailPage;