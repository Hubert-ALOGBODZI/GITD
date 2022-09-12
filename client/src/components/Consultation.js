import React from 'react';

import "../CSS/Consultation.css"

const Consultation = () => {
    return (
        <div className="Consultation">
            <h1>
                Consultation
            </h1>
            <div className="infos">
                <div className="infos1">
                    <table>
                        <tr >
                            <td>
                                <span>Nom De Famille *</span>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr><br />
                        <tr>
                            <td>
                                <span>Prénoms *</span>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr><br />
                        <tr>
                            <td>
                                <span>Age *</span>
                            </td>
                            <td>
                                <input type="number" name="" id="" />
                            </td>
                        </tr><br />
                        <tr>
                            <td>
                                <span >Jours du rendez-vous *  :</span>
                            </td>
                            <td>
                                <input type="date" style={{width:"100%"}} />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="infos2">
                    <button>EN LIGNE</button>
                    <button>Présentiel</button>
                </div>
                <div className="infos3">
                    <span>NB : </span>
                    <span>les noms demandé sont celles de vos certificats</span>
                </div>
            </div>
        </div>
    );
}

export default Consultation;