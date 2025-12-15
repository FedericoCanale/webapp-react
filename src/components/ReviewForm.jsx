function ReviewForm() {
    return (
        <form>
            <h4>Aggiungi recensione</h4>

            <div>
                <label>Nome</label><br />
                <input />
            </div>

            <div>
                <label>Voto</label><br />
                <input type="number" min="1" max="5" />
            </div>

            <div>
                <label>Recensione</label><br />
                <textarea />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}

export default ReviewForm;
