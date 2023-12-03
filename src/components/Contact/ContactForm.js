const ContactForm = function () {
    return (
        <div className="section">
            <div className="container">
                <div className="contact-form">
                    <div>
                        <p>Your name*</p>
                        <input type="text" placeholder="John Doe"></input>
                    </div>
                    <div>
                        <p>Your email*</p>
                        <input type="text"  placeholder="Your email address"></input>
                    </div>
                    <div>
                        <p>Message*</p>
                        <textarea  placeholder="Enter your message"></textarea>
                    </div>
                    <input type="button" value="Submit"></input>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;