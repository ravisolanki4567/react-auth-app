import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Label, Input, Card, Error } from "../../components/UI";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");

  const onFormIsValidate = () => {
    if (name && email && password && address) {
      return true;
    }
    if (name === "") {
      setNameError("Name is required");
    }

    if (email === "") {
      setEmailError("Email is required");
    }
    if (password === "") {
      setPasswordError("Password is required");
    }

    if (address === "") {
      setAddressError("Address is required");
    }

    return false;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onFormIsValidate()) {
      console.log(name);
    }
  };

  const onClearFormHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setAddressError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card title="Sign Up">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <Label>Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              placeholder="Enter your name"
              autoFocus
            />
            {nameError && <Error>{nameError}</Error>}
          </div>

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
          </div>

          <div className="mb-6">
            <Label>Address</Label>
            <textarea
              placeholder="Enter your address"
              className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows={2}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressError("");
              }}
            />
            {addressError && <Error>{addressError}</Error>}
          </div>

          <Button type="submit" color="bg-green-500  hover:bg-green-600">
            Sign Up
          </Button>

          {/* <div className="mt-3">
            <Button
              type="button"
              onClick={onClearFormHandler}
              color="bg-red-500  hover:bg-red-600"
            >
              Clear Form
            </Button>
          </div> */}
        </form>

        <p className="mt-4 text-center text-gray-600">
          already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
