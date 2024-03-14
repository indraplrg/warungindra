import { Link } from "react-router-dom";

const Navbar = (props) => {
   const { account } = props;
   const handleClick = (type) => {
      switch (type) {
         case "logout":
            const localAkun = localStorage.getItem("akun");
            const localAkunParse = JSON.parse(localAkun);
            const akun = { ...localAkunParse, status: false };
            localStorage.clear();
            localStorage.setItem("akun", JSON.stringify(akun));
            break;
         case "delete":
            localStorage.clear();
            break;
         default:
            break;
      }
   };
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
            <li
               className={`hover:text-gray-200 transition-all ease-linear ${
                  account?.status == true ? " ml-auto" : null
               }`}
            >
               {account?.status == true ? (
                  <span className="capitalize font-semibold flex gap-10">
                     <h2>{account.username}</h2>
                     <div className="relative group">
                        More
                        <div className="hidden group-hover:flex flex-col absolute gap-1 -right-11 w-32 p-1 text-white rounded-sm top-6 text-center">
                           <button
                              className="hover:text-gray-200"
                              onClick={() => handleClick("logout")}
                           >
                              <Link to="/login">Logout</Link>
                           </button>{" "}
                           {""}
                           <button
                              className="hover:text-gray-200"
                              onClick={() => handleClick("delete")}
                           >
                              <Link to="/register">Hapus Akun</Link>
                           </button>
                        </div>
                     </div>
                  </span>
               ) : (
                  <Link to="/login">Login</Link>
               )}
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
