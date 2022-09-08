import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
import acctof3 from "../images/logo.png"
import acctof4 from "../images/pexels-pavel-danilyuk-5998516.jpg"
import React from 'react';
import { Link } from 'react-router-dom';
// import {
//     MDBCarousel,
//     MDBCarouselItem,
// } from 'mdb-react-ui-kit';

// import{ Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BrowserRouter as Router, Routes } from 'react-router-dom';



import "./Home.css"
const Home = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        <div style={{}} className="Home">

            <div className="text">
                <div className="description"
                    style={{
                        backgroundImage: `url(${acctof})`, backgroundRepeat: 'no-repeat',

                    }}
                >
                    <div className="desc_card">
                        <span>
                            <img src={acctof3} style={{ width: 130, height: 80, paddingTop: 9 }} alt="" />
                        </span>
                        <p>
                            AGBE EST UN  SITE QUI VOUS PERMET DE REPérer le plutôt possible  une agence de santé proche de vous et de faire des réservations pour une consultation en ligne ou en présentiel
                        </p>

                    </div>
                </div>
                <div className="nessecité">
                    <div className="card">
                        <span>
                            Téléconsulter avec un médecin  sous RDV en quelques clics
                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                    <div className="card">
                        <span>
                            Trouvez votre centre de santé  près de chez vous avec AGBE
                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                    <div className="card">
                        <span>
                            Demande de consultation d’un médecin   en quelques clics
                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="noire"></div>
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
                        <h3>Hopital de bé</h3>
                        <div className="info_hopital">
                            <div className="visuel">
                                <h4>VISUEL DU CENTRE</h4>
                                <div className="card_visuel">
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                    <div className="card">
                                        <img src={acctof4} style={{ width: 160, height:150, paddingTop: 9 }} alt="" />
                                    </div>
                                </div>
                                <div className="spécialités">
                                    <h4>SPÉCIALITÉS</h4>
                                    <div className="info">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="map_director">
                                    <div className="message">
                                    clique pour réserver une place >
                                    </div>
                                    <Link to="/">
                                        <button>REJOINDRE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="contact"
             style={{
                backgroundImage: `url(${acctof4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
               
                
            }}
            >
                <h1>CONTACTEZ NOUS</h1>
                <div className="contact_left">
                    <div className="logo">
                        {/* <img src={acctof4} style={{}} alt="" /> */}
                    </div>
                    <div className="infos">
                        <div className="left">

                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
                <div className="contact_right">
                    <div className="name"></div>
                    <div className="message">
                        <span>Name</span>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="mail">
                        <span>Mail</span>
                        <input type="email" placeholder="Your Email Address" />
                    </div>
                    <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </section>

        </div>
        // </Routes>
        //</BrowserRouter> 
        //     <div style={{ paddingTop: 100 }}>
        //     <Link to="/Contact">
        //       <button>Posts</button>
        //     </Link>
        //   </div>
        // <BrowserRouter>
        //     <Routes>

        // <div className="home" style={{ paddingTop: 100 }}>
        //     <div className="text">
        //         <div className="description">
        //             <img src={acctof} alt="" />
        //             <p>
        //                 AGBE EST UN  SITE QUI VOUS PERMET DE REPérer le plutôt possible  une agence de santé proche de vous et de faire des réservations pour une consultation en ligne ou en présentiel
        //             </p>
        //         </div>
        //         <div className="nessecité">
        //             <div className="card">
        //                 <span>
        //                     Téléconsulter avec un médecin sous RDV en quelques clics
        //                 </span>
        //                 <Link to="/">
        //                     <button>
        //                         RECHERCHER
        //                     </button>
        //                 </Link>
        //             </div>
        //             <div className="card">
        //                 <span>
        //                     Trouvez votre centre de santé près de chez vous avec AGBE                        </span>
        //                 <Link to="/">
        //                     <button>
        //                         RECHERCHER
        //                     </button>
        //                 </Link>
        //             </div>
        //             <div className="card">
        //                 <span>
        //                     demande de consultation d’un médecin en quelques clics                        </span>
        //                 <Link to="/">
        //                     <button>
        //                         RECHERCHER
        //                     </button>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="noire"></div>
        //     </div>


        // </div>
        //     </Routes>
        // </BrowserRouter>
    );
}

export default Home;