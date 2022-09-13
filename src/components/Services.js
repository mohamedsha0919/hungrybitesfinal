const Services = () => {
  const services = {
    width: "100%",
    height: "90vh",
    paddingTop: "15%",
    overflowX: "hidden",
  }
    return (
        <>
       <section className="services" style={services}>
      <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 col-12">
              <div className="service-item">
                  <i className="fa fa-3x fa-user-tie"></i>
                  <h5>Master Chefs</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                  <i className="fa fa-3x fa-utensils"></i>
                  <h5>Quality Food</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item rounded">
                  <i className="fa fa-3x fa-cart-plus"></i>
                  <h5>Online Order</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item rounded">
                  <i className="fa fa-3x fa-headset"></i>
                  <h5>24/7 Service</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
      </div>
    </section>

      <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Company</h4>
            <a className="btn btn-link" href="/#">About Us</a>
            <a className="btn btn-link" href="/#">Contact Us</a>
            <a className="btn btn-link" href="/#">Reservation</a>
            <a className="btn btn-link" href="/#">Privacy Policy</a>
            <a className="btn btn-link" href="/#">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Opening</h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start fw-normal mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto">
              <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
              <button type="button" className="btn signup--btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="" href="/#">Your Site Name</a>, All Right Reserved.
              
              
              Developed By <a className="text-warning" href="/#">Mohamedsha.</a><br/><br/>
              Distributed By <a className="text-warning" href="/#" target="_blank">Mohamedsha.</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/#">Home</a>
                <a href="/#">Cookies</a>
                <a href="/#">Help</a>
                <a href="/#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
      
      </>
    )
}
export default Services;