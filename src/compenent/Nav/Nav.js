import React from "react";
import './Nav.css';
import studio from '../../design/images/studio.png'

function Nav() {
    return (
        <div className="App">
            <div className="flex jus">
                <div>
                    <img width="300px" src={studio} alt="" />
                </div>
                <div className="flex gap">
                    <p>Acceuil</p>
                    <p>Favoris</p>
                </div>
            </div>

        </div>
    );
}

export default Nav;
