import { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import SignUp from "./SignUp";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signUp" : "login");
  };

  return (
    <div className="authenticate">
      <div className="auth-left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="auth-right">
        {active === "login" ? <Login /> : <SignUp />}

        <div className="auth-more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;