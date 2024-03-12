import { useEffect } from "react";
import {
   Card,
   CardBody,
   CardFooter,
   CardHeader,
} from "../components/elements/Card";
import Navbar from "../components/fragments/Navbar";
import { products } from "../data/data";
import { useNavigate } from "react-router";

const Home = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const akun = localStorage.getItem("akun");
      const akunParse = JSON.parse(akun);
      if (!akunParse) {
         navigate("/login");
      }
   }, []);

   return (
      <>
         <HeroSection />
         <ProductSection />
      </>
   );
};

const HeroSection = () => {
   return (
      <section>
         <div className="h-[30rem] bg-custom-tertiary text-black">
            <Navbar />
            <div className="h-2/3 flex justify-around px-32 items-center">
               <div className="text-white">
                  <h1 className="text-3xl font-semibold">
                     Selamat datang di{" "}
                     <span className="text-custom-primary capitalize">
                        warung indra
                     </span>
                  </h1>
                  <p className="max-w-xl mt-2 text-gray-50 font-Inter indent-10">
                     <span className="text-custom-primary font-semibold">
                        {" "}
                        Warung indra{" "}
                     </span>{" "}
                     merupakan warung yang menyediakan berbagai macam aneka{" "}
                     <span className="font-semibold">Buah dan Sayuran</span>,
                     dan tentunya saja{" "}
                     <span className="font-semibold">Berkualitas</span>
                  </p>
               </div>
               <div>
                  <img src="/images/market.png" alt="" width="550px" />
               </div>
            </div>
         </div>
      </section>
   );
};

const ProductSection = () => {
   return (
      <section className="p-10">
         <h1 className="text-xl text-custom-tertiary font-semibold mb-4">
            Semua Produk
         </h1>
         <div className="min-h-dvh grid grid-cols-5 gap-3 overflow-hidden p-1">
            {products?.map((data) => {
               return (
                  <div key={data.id}>
                     <Card>
                        <CardHeader src={data.src} alt={data.name} />
                        <CardBody title={data.name} price={data.price} />
                        <CardFooter />
                     </Card>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Home;
