import Header from "../components/Header/Header";
import Contact from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";

function ContactUs() {
    return (
        <>
            <Header />
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 left-align">
                            <div className="main-title">Contact Us</div>
                            <div>
                                <p>Get in touch with us today</p>
                                <p>info</p>                        
                            </div>
                            <div>
                                <img className="contact-image1" src="resources/posts/ContactUs_1.jpg"></img>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="contact-image2" src="resources/posts/ContactUs_2.jpg"></img>
                            <Contact />
                        </div>
                    </div>
                    <ContactMap />
                </div>

                <div className="container"></div>
            </div>
        </>
    )
}

export default ContactUs;