import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
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
            <h2>Home View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
            <div className="text">
                <div className="description">
                    style={{
                        backgroundImage: `url(${acctof})`, backgroundRepeat: 'no-repeat',
                        width: '250px'
                    }}

                    <p>
                        AGBE EST UN  SITE QUI VOUS PERMET DE REPérer le plutôt possible  une agence de santé proche de vous et de faire des réservations pour une consultation en ligne ou en présentiel
                    </p>
                </div>
                <div className="nessecité">
                    <div className="card">
                        <span>
                            Téléconsulter avec un médecin sous RDV en quelques clics
                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                    <div className="card">
                        <span>
                            Trouvez votre centre de santé près de chez vous avec AGBE                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                    <div className="card">
                        <span>
                            demande de consultation d’un médecin en quelques clics                        </span>
                        <Link to="/">
                            <button>
                                RECHERCHER
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="noire"></div>
            </div>

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