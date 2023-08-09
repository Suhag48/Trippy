import "./LoginStyle.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <form action="#">
        <h1>Login Here</h1>
        <input type="email" placeholder="Mail" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>Not registerd? 
          <Link to="/signup">Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default Login