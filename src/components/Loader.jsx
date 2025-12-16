import { helix } from "ldrs";

helix.register();

function Loader() {
    return (
        <div className="loader-overlay">
            <l-helix
                size="45"
                speed="2.5"
                color="white"
            ></l-helix>
        </div>
    );
}

export default Loader;