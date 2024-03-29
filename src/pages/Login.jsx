import { useRef } from "react";
import Button from "../components/elements/Button/Index";
import Input from "../components/elements/Input/Index";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { useNavigate } from "react-router";

const Login = () => {
   const navigate = useNavigate();

   const inputRef = useRef({
      username: useRef(null),
      password: useRef(null),
   });

   const handleInput = (event) => {
      event.preventDefault();
      const username = inputRef.current.username.current.value;
      const password = inputRef.current.password.current.value;

      if (username == "" || password == "") {
         console.log("data tidak boleh kosong");
      } else {
         const localAkun = localStorage.getItem("akun");
         const localAkunParse = JSON.parse(localAkun);
         if (
            username == localAkunParse.username &&
            password == localAkunParse.password
         ) {
            const akun = { ...localAkunParse, status: true };
            localStorage.clear();
            localStorage.setItem("akun", JSON.stringify(akun));
            navigate("/");
         } else {
            console.log("katasandi atau username yang anda masukan salah");
         }
      }
   };
   return (
      <AuthLayouts type="login">
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
         <Button onClick={handleInput}>Login </Button>
      </AuthLayouts>
   );
};

export default Login;
