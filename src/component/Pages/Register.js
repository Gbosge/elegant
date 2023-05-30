import React from 'react';
import styles from './Pages.module.scss';
import { Link } from 'react-router-dom';
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook}  from 'react-icons/bs'

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
    
    <div className={styles.form}>
        <h2>Register</h2>
        <form>
            <input type='text' placeholder='Email' required />
            <input type='password' placeholder='password' required/>   
                             
               <button className='--btn --btn-primary --btn-block'>Register</button>
      
        </form>

        <span className={styles.register}>
        <p>Already have an account?</p>
        <Link to='/login'> Login</Link>
       </span>
    </div>
    <button className='--btn --btn-primary --btn-block'>
    <FcGoogle/> Signup with Google</button> <button className='--btn --btn-primary --btn-block'>
    <BsFacebook style={{color:'blue'}}/> Signup with Facebook</button>
    
        </section>
      )
    }
    

export default Register