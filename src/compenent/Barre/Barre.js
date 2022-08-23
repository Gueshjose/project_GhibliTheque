import React from "react";
import './Barre.css';



function Barre() {
    return (
        <div className="App">
            <div className="flex barre">
                <div>
                    <input name="Entrez le nom du film"></input>
                </div>
                <div>
                    <button>Filtre</button>
                </div>
            </div>
        </div>
    );
}

export default Barre;