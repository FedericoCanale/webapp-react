import { useState, useContext } from "react";
import axios from "axios";
import { LoaderContext } from "../context/LoaderContext";

function ReviewForm({ movieId, onReviewCreated }) {
    const [name, setName] = useState("");
    const [vote, setVote] = useState(5);
    const [text, setText] = useState("");


    const { setIsLoading } = useContext(LoaderContext);

    const handleSubmit = (e) => {


        setIsLoading(true);

        axios
            .post(`http://localhost:3000/movies/${movieId}/reviews`, {
                name,
                vote,
                text,
            })
            .then((res) => {
                console.log("Review salvata", res.data);


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
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h4 className="mb-3">Aggiungi recensione</h4>

            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Voto</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control"
                    value={vote}
                    onChange={(e) => setVote(Number(e.target.value))}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Recensione</label>
                <textarea
                    className="form-control"
                    rows="3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Invia
            </button>
        </form>
    );
}

export default ReviewForm;