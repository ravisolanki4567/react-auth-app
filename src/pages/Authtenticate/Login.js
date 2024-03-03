import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label, Input, Card, Error } from "../../components/UI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onFormIsValidate = () => {
    if (email && password) {
      return true;
    }
    if (email === "") {
      setEmailError("Email is required ");
    }
    if (password === "") {
      setPasswordError("Password is required");
    }

    return false;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onFormIsValidate()) {
      console.log(email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card title="Sign In">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              autoFocus
            />
            {emailError && <Error>{emailError}</Error>}
          </div>
          <div className="mb-6">
            <Label>Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Enter your password"
            />
            {passwordError && <Error>{passwordError}</Error>}

            <p className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:text-blue-600"
              >
                Forgot Password?
              </Link>
            </p>
          </div>

          <Button type="submit" color="bg-green-500  hover:bg-green-600">
            Sign In
          </Button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
