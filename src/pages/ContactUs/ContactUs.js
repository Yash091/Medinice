import {React,useState} from 'react';
import './ContactUs.css';
import dr from "../../images/dr.png";


const ContactUs = () => {

    const [email,setEmail] = useState("");

  return (
    <div className='contact-container'>
        <div className = 'left-container'>
            <img src = {dr} />
        </div>

        <div className = 'right-container'>
            <div className='heading'>
                Get In Touch
            </div>
            <div className='sub-head'>
                <p>Have an inquiry or some feedback for us?</p>
                <p>Fill out the form below to contact our team.</p>
            </div>

            <form action={`https://formsubmit.co/${email}`} method="POST" >
                <div className='details'>
                    <div className='person-name'>
                        <div className = 'field'>
                            <label for="fname">First name</label>
                            <input type="text" id="fname" name="fname" placeholder="First name" />
                        </div>

                        <div className = 'field'>
                            <label for='lname'>Last Name</label>
                            <input type="text" id="lname" name="lname" placeholder="Last name" />
                        </div>
                    </div>

                    <div className = 'field'>
                        <label for='email'>Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email id" onChange={(e)=>{setEmail(e.target.value);}}/>
                    </div>

                    <div className = 'field'>
                        <label for='message'>Message</label>
                        <textarea type = "text" id="message" name="message" placeholder="Your Message" />
                    </div>

                    <input type='hidden' name = '_next' value = "http://localhost:3000/" />

                </div>
                <button className='submit'>Get in Touch</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs