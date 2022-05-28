import React from 'react'
import './Contect.css'
const Contect = () => {
  return (
    <div className="contact-form" id='contect'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in tuch</span>
                <span>Contact Me</span>
            </div>
        </div>
        <div className="c-right">
            <form>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea  name="user_name" className="user" placeholder="Massage"/>
                <input type="submit"  value="send" className="button" />
            </form>
        </div>
    </div>
  )
}

export default Contect