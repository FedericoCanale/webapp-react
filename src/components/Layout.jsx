import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import Loader from "./Loader";

function Layout({ children }) {
    const { isLoading } = useContext(LoaderContext);

    return (
        <div>
            {isLoading && <Loader />}

            {/* navbar */}
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container d-flex align-items-center">

                        {/* Titolo */}
                        <span className="navbar-brand mb-0 h1">
                            WebApp Film
                        </span>

                        {/* Link Home */}
                        <Link
                            to="/"
                            className="text-light"
                            style={{ fontSize: "0.9rem" }}
                        >
                            Home
                        </Link>
                    </div>
                </nav>
            </header>

            {/* page */}
            <main className="container mt-4">
                {children}
            </main>
        </div>
    );
}

export default Layout;