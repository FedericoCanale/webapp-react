import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId, onReviewCreated }) {
    const [name, setName] = useState("");
    const [vote, setVote] = useState(5);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {


        axios
            .post(`http://localhost:3000/movies/${movieId}/reviews`, {
                name,
                vote,
                text,
            })
            .then((res) => {
                console.log("Review salvata", res.data);

                // creo la review da aggiungere subito in pagina
                const newReview = {
                    id: res.data.reviewId,
                    name,
                    vote,
                    text,
                };


                onReviewCreated(newReview);


                setName("");
                setVote(5);
                setText("");
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
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Voto</label><br />
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={vote}
                    onChange={(e) => setVote(Number(e.target.value))}
                    required
                />
            </div>

            <div>
                <label>Recensione</label><br />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}

export default ReviewForm;