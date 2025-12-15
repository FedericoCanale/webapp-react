import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId }) {
    const [name, setName] = useState("");
    const [vote, setVote] = useState(5);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/movies/${movieId}/reviews`, {
            name,
            vote,
            text,
        })
            .then((res) => {
                console.log("Review salvata", res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Aggiungi recensione</h4>

            <div>
                <label>Nome</label><br />
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Voto</label><br />
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={vote}
                    onChange={(e) => setVote(Number(e.target.value))}
                />
            </div>

            <div>
                <label>Recensione</label><br />
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}

export default ReviewForm;