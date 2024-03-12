import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="w-full bg-transparent ">
         <ul className="flex items-center text- py-7 px-12 gap-10 text-white">
            <li>
               <Link
                  to="/"
                  className="text-3xl tracking-tighter font-semibold text-custom-primary"
               >
                  Warung Indra
               </Link>
            </li>
            <li className="hover:text-gray-200 transition-all ease-linear">
               <Link to="/sayur">Sayuran</Link>
            </li>
            <li className="hover:text-gray-200 transition-all ease-linear">
               <Link to="/buah">Buah</Link>
            </li>
            <li className="hover:text-gray-200 transition-all ease-linear">
               <Link to="/umbi">Umbi</Link>
            </li>
            <li className="hover:text-gray-200 transition-all ease-linear">
               <Link to="/login">Login</Link>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
