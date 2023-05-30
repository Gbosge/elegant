import React from 'react';
import styles from './Pages.module.scss';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../config/config';
import { toast } from 'react-toastify';





const Login = () => {
const provider = new GoogleAuthProvider();
const signInWithGoogle = () =>{
      signInWithPopup(auth,provider)
      .then(
        toast.success('login successfully')
      )

}

  return (
    <section className={`container ${styles.auth}`}>
<div className={styles.form}>
    <h2>Login</h2>
    <form>
        <input type='text' placeholder='Email' required/>
        <input type='password' placeholder='password' required/>
       
        <div className={styles.links}>
        <Link to="/reset">Reset Password</Link>
              </div>
              <p> or </p>
         
    </form>
    <button className='--btn --btn-primary --btn-block' onClick={signInWithGoogle}>
           <FcGoogle/> Login With Google</button>

    <span className={styles.register}>
              <p>Don't have an account? </p>
              <Link to="/register"> <p> Click to Register </p> </Link>
              
            </span>
</div>

    </section>
  )
}

export default Login