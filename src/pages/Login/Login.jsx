import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Circles } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  // function handleclick() {
  //   navigate("/dashboard");
  // }

  const createUserApi = "http://localhost:3002";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, name: value });
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      setIsLoading(true);
      const response = await fetch(createUserApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("Login succesfully");
        setUser({ email: "", password: "" });
        navigate("/show-user");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="title">
      <div className="sign">
        {isLoading && <Circles />}
        {error && <p>Error:{error}</p>}
        <p>
          SIGN IN <a>Enter your credintials to access your account</a>
        </p>
      </div>

      <form onSubmit={handleSubmitEvent}>
        <div className="input-box">
          <a>Email</a>
          <input
            type="email"
            placeholder="Enter your email"
            id="user-email"
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-box">
          <a>Password</a>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
}
export default Login;
