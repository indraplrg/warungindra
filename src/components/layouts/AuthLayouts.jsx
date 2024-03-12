import { User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
   const { type, children } = props;
   return (
      <div className="h-dvh flex justify-center items-center">
         <form action="">
            <div className="flex flex-col shadow-lg border border-slate-50 rounded-md py-2 px-4 h-fit w-64">
               <div className="flex flex-col items-center text-custom-tertiary mb-3">
                  <User size={40} />
                  {type == "login" ? (
                     <h2 className="text-lg">Sign In</h2>
                  ) : null}
                  {type == "register" ? (
                     <h2 className="text-lg">Sign Up</h2>
                  ) : null}
               </div>
               <div className="flex flex-col gap-1">{children}</div>
               {type == "login" ? (
                  <p className="text-xs mt-1 text-center">
                     have an account?{" "}
                     <Link
                        to="/register"
                        className="text-custom-secondary font-semibold"
                     >
                        Register
                     </Link>
                  </p>
               ) : null}
               {type == "register" ? (
                  <p className="text-xs mt-1 text-center">
                     have an account?{" "}
                     <Link
                        to="/login"
                        className="text-custom-secondary font-semibold"
                     >
                        Login
                     </Link>
                  </p>
               ) : null}
            </div>
         </form>
      </div>
   );
};

export default AuthLayouts;
