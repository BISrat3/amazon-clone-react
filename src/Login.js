import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase"

function Login() {

  // to pull data programmatically change the url
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const signIn = (e) => {
    // event the page from refreshing
    e.preventDefault()
    console.log("e.target")
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }
  const register = e => {
    e.preventDefault()
    // it create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      // it will comeback auth object if everything is smooth
      .then((auth) => {
        // it successfully created a new user with email and password
        // console.log(auth)
        if (auth){
          // inside the history used to pushing to redirecting to different url
          history.push('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to="/">
        <img 
            className ='login_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            alt=""/>
      </Link>

      <div
        className='login__container'>
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input 
              type="text" 
              value={email}
               // when ever the user entered on this element
              // as the user type in it will mp[ to the value]
              onChange={(e) => setEmail(e.target.value) } />

            <h5>Password</h5>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
             />
            <button 
              className='login__signInButton'
              type="submit" 
              onClick={signIn}>Sign In</button>
          </form>

          <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button 
            className='login__registerButton'
            onClick={register}> Create your Amazon Account
          </button>
      </div>
    </div>
  )
}

export default Login