import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Page() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://media.cntraveler.com/photos/581250f2997d59497dccf8bc/16:9/w_2560%2Cc_limit/GettyImages-185298837.jpg" height="650" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Search and book best flights here</h3>
                                        <p>At BookMyTrip, we offer you the best tickets to not only fly on-time but to also enjoy hassle-free and courteous service on board and beyond.</p>
                                        <Link to="/scheduleFlight/search" className="btn btn-primary">Book Now</Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://www.aviationtoday.com/wp-content/uploads/2020/02/vistara.jpg" height="650" alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Avail premium services on domestic flights</h3>
                                        <p>Upgrade your flying experience with a host of convenient services and priority privileges.</p>
                                        <Link to="/login" className="btn btn-primary">Login</Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://media.wired.co.uk/photos/606d9daffd9831b13e4470a2/master/w_1600%2Cc_limit/gettyimages-1179701828.jpg" height="650" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block text-dark">
                                        <h3>Cheapest domestic and international tickets</h3>
                                        <p>BookMyTrip provides great offers, competitive airfares, and a seamless online booking experience to many of its customers.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container my-5">
                <h3 className="text-center mb-3">
                    <i className="fas fa-map-marked-alt"></i> &nbsp;Flight Routes Overview
                </h3>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div style={{ border: "2px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1746897362533!5m2!1sen!2sin"
                                width="100%"
                                height="500"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Flight Route Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
