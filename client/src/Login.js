import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [password, SetPassword] = useState();
  const [email, SetEmail] = useState();

const navigate = useNavigate()
  const handelSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await axios.post('http://localhost:5000/login',{ email,password })
      console.log(result.data)
      if (result.data === "Success"){
        navigate('/home')
      }
      
    }catch(error){
      console.log(error.response)
    }
    // await axios
    //   .post("http://localhost:5000/register", { name, email, password })
    //   .then((result) => console.log(result))
    //   .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div class="card text-bg-dark mb-3">
        <div class="card-body">
          <form onSubmit={handelSubmit}>
            
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
          <Link to="/register" type="submit" class="btn btn-primary">
          Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
