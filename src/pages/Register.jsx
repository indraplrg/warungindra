import { useRef } from "react";
import Input from "../components/elements/Input/Index";
import AuthLayouts from "../components/layouts/AuthLayouts";
import Button from "../components/elements/Button/Index";
import { useNavigate } from "react-router";

const Register = () => {
   const navigate = useNavigate();
   const inputRef = useRef({
      username: useRef(null),
      password: useRef(null),
      confirmPassword: useRef(null),
   });

   const handleInput = (event) => {
      event.preventDefault();
      const username = inputRef.current.username.current.value;
      const password = inputRef.current.password.current.value;
      const confirmPassword = inputRef.current.confirmPassword.current.value;

      if (username == "" || password == "" || confirmPassword == "") {
         console.log("data tidak boleh kosong");
      } else {
         const account = {
            username,
            password,
            confirmPassword,
         };
         localStorage.setItem("akun", JSON.stringify(account));
         navigate("/login");
      }
   };

   return (
      <AuthLayouts type="register">
         <Input
            type="text"
            placeholder="username"
            custom="border-b-slate-300 border-b-2"
            ref={inputRef.current.username}
         />
         <Input
            type="password"
            placeholder="password"
            custom="border-b-slate-300 border-b-2"
            ref={inputRef.current.password}
         />
         <Input
            type="password"
            placeholder="confirm password"
            custom="border-b-slate-300 border-b-2"
            ref={inputRef.current.confirmPassword}
         />
         <Button onClick={handleInput}>Register</Button>
      </AuthLayouts>
   );
};

export default Register;
