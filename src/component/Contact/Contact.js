import React from 'react'
import style from './Contact.module.scss'

const Contact = () => {
  return (
    <div class={style.contact}>
        <div class="contact-form">
            <form id="contact" action="" method="post">
                <div class="row3">
                    <div class="input">
                     
        <input class="name" name="name" type="text" id="name" placeholder="Your Name*" required=""/>
        <input class="name" name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required=""/>
        <input class="subject" name="subject" type="text" id="subject" placeholder="Subject"/>
                         </div>
                    <div class="input2">
                        
                            <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                        
                    
                    
                            <button type="submit" id="form-submit" class="main-button">SEND MESSAGE</button>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact