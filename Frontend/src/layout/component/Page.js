import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const cities = [
    {
        airport: "Indira Gandhi International Airport",
        location: "Delhi, India",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29877884.435150057!2d59.44429219999999!3d23.917875680195365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1746918971642!5m2!1sen!2sin"
    },
    {
        airport: "Chhatrapati Shivaji Maharaj International Airport",
        location: "Mumbai, India",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29877884.435150057!2d59.44429219999999!3d23.917875680195365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai!5e0!3m2!1sen!2sin!4v1746919016393!5m2!1sen!2sin"
    },
    {
        airport: "Rajiv Gandhi International Airport",
        location: "Hyderabad, India",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29877884.435150057!2d59.44429219999999!3d23.917875680195365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbb7fb1d91b45%3A0x532029ec33eaa851!2sRajiv%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1746919092700!5m2!1sen!2sin"
    },
    {
        airport: "Kempegowda International Airport Bengaluru",
        location: "Bangalore, India",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29877884.435150057!2d59.44429219999999!3d23.917875680195365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1cfe75446265%3A0x296c70e9a129418e!2sKempegowda%20International%20Airport%20Bengaluru!5e0!3m2!1sen!2sin!4v1746919157045!5m2!1sen!2sin"
    },
    {
        airport: "Haneda Airport",
        location: "Tokyo, Japan",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12984.971910234195!2d139.7684885017618!3d35.54770092084111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018640ba43192e3%3A0xd32c3a9d146f8df!2sHaneda%20Airport!5e0!3m2!1sen!2sin!4v1746919282703!5m2!1sen!2sin"
    },
    {
        airport: "Netaji Subhash Chandra Bose International Airport",
        location: "Kolkata, India",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29877884.435150057!2d59.44429219999999!3d23.917875680195365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89faa59df6903%3A0xdb1444043648b83!2sNetaji%20Subhash%20Chandra%20Bose%20International%20Airport!5e0!3m2!1sen!2sin!4v1746919204225!5m2!1sen!2sin"
    },
    {
        airport: "Dubai International Airport",
        location: "Dubai, UAE",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28867.25761728987!2d55.3387445961764!3d25.256883884358803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0693260e69%3A0xe695d4007a48eee9!2sDubai%20International%20Airport!5e0!3m2!1sen!2sin!4v1746919240474!5m2!1sen!2sin"
    },
    {
        airport: "Sydney Kingsford Smith Airport",
        location: "Sydney, Australia",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2794180229125!2d151.17721607544092!3d-33.93394082243526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0e4bf23fadd%3A0x5237240ed6e66b85!2sSydney%20Airport%20DOM%20T2%20Drop-Off!5e0!3m2!1sen!2sin!4v1746919318745!5m2!1sen!2sin" 
    }
];

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
                <h3 className="text-center mb-4">
                    <i className="fas fa-plane-departure"></i> &nbsp;Global Airport Views
                </h3>
                <div className="row">
                    {cities.map((city, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="ratio ratio-4x3">
                                    <iframe
                                        src={city.iframe}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title={`Map of ${city.airport}`}
                                    ></iframe>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title mb-1">{city.airport}</h6>
                                    <p className="text-muted mb-0">{city.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default Page;
