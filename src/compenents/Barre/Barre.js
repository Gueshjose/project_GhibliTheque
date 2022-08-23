import React from "react";
import './Barre.css';



function Barre() {
    return (
        <div className="App">
            <div className="flex barre">
                <div>
                    <input className="shadow-sm bg-slate-100 border-0 shadow-slate-600 rounded-lg" name="Entrez le nom du film"></input>
                </div>
                <div>
                    <button>Filtre</button>
                </div>
            </div>
        </div>
    );
}

export default Barre;