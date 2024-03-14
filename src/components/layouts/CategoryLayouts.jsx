import { Link, useNavigate } from "react-router-dom";
import { products } from "../../data/data";
import { Card, CardBody, CardFooter, CardHeader } from "../elements/Card";
import { useEffect, useState } from "react";

const CategoryLayouts = (props) => {
   const { theme, title } = props;
   const navigate = useNavigate();

   const [account, setAccount] = useState(null);
   useEffect(() => {
      const akun = localStorage.getItem("akun");
      const akunParse = JSON.parse(akun);
      setAccount(akunParse);
   }, []);

   const handleBuy = (id) => {
      if (account) {
         navigate(`/buy/${id}`);
      } else {
         navigate("/login");
      }
   };

   const handleAddToCart = (id) => {
      if (account) {
         navigate(`/buy/${id}`);
      } else {
         navigate("/login");
      }
   };

   const onClick = {
      buy: handleBuy,
      cart: handleAddToCart,
   };

   return (
      <div className="h-dvh flex flex-col py-8 px-20 overflow-auto">
         <div className="flex items-center gap-3 mb-4 my-4 text-slate-700">
            <Link to="/">{"< "}Kembali</Link>
            <span className="text-custom-accent text-xl font-semibold">
               {title}
            </span>
         </div>
         <div className="grid grid-cols-5 gap-4">
            {products
               ?.filter((product) => {
                  return product.category.toLowerCase() == theme.toLowerCase();
               })
               .map((data) => {
                  return (
                     <div key={data.id}>
                        <Card>
                           <CardHeader src={data.src} alt={data.name} />
                           <CardBody title={data.name} price={data.price} />
                           <CardFooter id={data.id} onClick={onClick} />
                        </Card>
                     </div>
                  );
               })}
         </div>
      </div>
   );
};

export default CategoryLayouts;
