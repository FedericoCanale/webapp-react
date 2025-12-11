import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                console.log("Dati ricevuti:", res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.error("Errore nella chiamata:", err);
            });
    }, []);

    return (
        <div>
            <h2>Lista film</h2>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;