import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
import React from 'react';
// import {
//     MDBCarousel,
//     MDBCarouselItem,
// } from 'mdb-react-ui-kit';

// import{ Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// import "./Home.css"
const Home = () => {
    return (
        <div className="home">
             <div className="text">
                <div className="description">
                    <img src={acctof} alt="" />
                    <p>
                        AGBE EST UN  SITE QUI VOUS PERMET DE REPérer le plutôt possible  une agence de santé proche de vous et de faire des réservations pour une consultation en ligne ou en présentiel
                    </p>
                </div>
                <div className="nessecité">
                    <div className="card">
                        <span>
                            Téléconsulter avec un médecin sous RDV en quelques clics
                        </span>
                        <button>
                            <Link to="/">
                                RECHERCHER
                            </Link>
                        </button>
                    </div>
                    <div className="card">
                        <span>
                            Trouvez votre centre de santé près de chez vous avec AGBE                        </span>
                        <button>
                            <Link to="/">
                                RECHERCHER
                            </Link>
                        </button>
                    </div>
                    <div className="card">
                        <span>
                            demande de consultation d’un médecin en quelques clics                        </span>
                        <button>
                            <Link to="/">
                                RECHERCHER
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="noire">

                </div>
            </div>
           
            {/* <div className="slide"> */}

                {/* <Carousel>
                <div style={{width:100,height:100}}>
                    <img src={acctof} />
                    <p className="legend">Legend 1</p>
                </div>
                <div  style={{width:100,height:100}}>
                    <img src={acctof} />
                    <p className="legend">Legend 2</p>
                </div>
                <div  style={{width:100,height:100}}>
                    <img src={acctof} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
                {/* <MDBCarousel showControls showIndicators dark fade>
                    <MDBCarouselItem
                        className='w-100 '
                        itemId={1}
                        src={acctof}
                        style={{}}
                        alt='...'
                    >
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 '
                        itemId={2}
                        src={acctof2}
                        alt='...'
                    >
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 '
                        itemId={3}
                        src={acctof}
                        alt='...'
                    >
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel> */}

            {/* </div> */}
        </div>
    );
}

export default Home;