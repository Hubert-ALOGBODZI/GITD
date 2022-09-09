import { HospitalImage } from "../Data/Photo_du_centre";

// import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
// import acctof3 from "../images/logo.png"
import acctof4 from "../images/pexels-pavel-danilyuk-5998516.jpg"
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "../CSS/Localisation.css"


const Localisation = () => {
    return (

        <div className="urgence">
            <h1>
                URGENCES
            </h1>
            <div className="hopitaux">
                <div className="hopitaux_left">
                    <h3>HOPITAUX PROCHES</h3>
                    <div className="different"
                        style={{
                            backgroundImage: `url(${acctof4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',


                        }}
                    >
                        <div className="card">
                            <span>
                                Hopital de bé
                            </span>
                            <p>
                                à 1 km de chez vous
                            </p>
                        </div>
                        <div className="card">
                            <span>
                                Hopital de bé
                            </span>
                            <p>
                                à 1 km de chez vous
                            </p>
                        </div>
                        <div className="card">
                            <span>
                                Hopital de bé
                            </span>
                            <p>
                                à 1 km de chez vous
                            </p>
                        </div>
                        <div className="card">
                            <span>
                                Hopital de bé
                            </span>
                            <p>
                                à 1 km de chez vous
                            </p>
                        </div>
                        <div className="card">
                            <span>
                                Hopital de bé
                            </span>
                            <p>
                                à 1 km de chez vous
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hopitaux_right">
                    <h3>HOPITAL DE BÉ</h3>
                    <div className="info_hopital">
                        <div className="visuel">
                            <div className="visuel1">

                                <h4>VISUEL DU CENTRE</h4>
                                <div className="card_visuel">
                                    {
                                        HospitalImage.map((post) => {
                                            return (
                                                <div className="card">
                                                    <img src={post.img} style={{ width: "100%", height: "100%" }} alt="" />
                                                </div>
                                            )
                                        })

                                    }
                                    {/* <div className="card">
                                    <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
                                </div>
                                <div className="card">
                                    <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
                                </div>
                                <div className="card">
                                    <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
                                </div>
                                <div className="card">
                                    <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
                                </div>
                                <div className="card">
                                    <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
                                </div>
                            </div> */}
                                </div>
                            </div>

                            <div className="spécialités">
                                <h4>SPÉCIALITÉS</h4>
                                <div className="info">
                                    <span>Lorem ipsum dolor sit amet.</span><br />
                                    <span>Lorem ipsum dolor sit amet.</span><br />
                                    <span>Lorem ipsum dolor sit amet.</span><br />
                                    <span>Lorem ipsum dolor sit amet.</span><br />
                                    <span>Lorem ipsum dolor sit amet.</span><br />
                                </div>
                            </div>
                            <div className="map_director">
                                <div className="message">
                                    clique pour réserver une place -------
                                </div>
                                <Link to="/Home">
                                    <button>REJOINDRE</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Localisation;