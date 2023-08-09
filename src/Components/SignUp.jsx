import "./SignUpStyle.css"

import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="signup">
      <form action="#">
        <h1>Join us</h1>
        
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="cpassword" placeholder="Confirm Password" />
        <button>Join</button>
        <p>Already registerd? 
          <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp