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
                <label className="form-label"><strong>Nome</strong></label>
                <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Voto</strong></label>
                <div className="mb-3">

                    <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <i
                                key={star}
                                className={`bi ${star <= vote ? "bi-star-fill" : "bi-star"} text-warning`}
                                style={{ cursor: "pointer", fontSize: "1.2rem", marginRight: "4px" }}
                                onClick={() => setVote(star)}
                            ></i>
                        ))}
                    </div>
                    <small className="text-muted">{vote}/5</small>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Recensione</strong></label>
                <textarea
                    className="form-control"
                    rows="3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">
                <strong>Invia</strong>
            </button>
        </form>
    );
}

export default ReviewForm;