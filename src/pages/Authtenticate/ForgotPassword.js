import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label, Input, Card, Error } from "../../components/UI";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onFormIsValidate = () => {
    if (email) {
      return true;
    }
    if (email === "") {
      setEmailError("Email is required");
    }
    return false;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onFormIsValidate()) {
      console.log(email);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card title="Forgot Password">
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
              required
              autoFocus
            />
            {emailError && <Error>{emailError}</Error>}
          </div>

          <Button type="submit" color="bg-green-500  hover:bg-green-600">
            Forget Password
          </Button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Remember your password?{" "}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default ForgotPassword;
