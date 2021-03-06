import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"


function Contact() {
    const [done, setDone] = useState(false)
    const formRef = useRef()
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_pi9rg0u', 'template_86n6ja5', formRef.current, 'user_maliPqeOEGVOjVe7dllg3')
            .then((result) => {
                console.log(result.text);
                setDone(true)

            }, (error) => {
                console.log(error.text);
            });        
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's dicuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />0824754878
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />phamthanhnam0700@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />Ha Noi, Viet Nam
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                            <button>Submit</button>
                            {done && "Message sent! Thank you!"}
                        </form>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Contact
