export const Card = (props) => {
   const { children, custom } = props;
   return (
      <div
         className={`shadow-lg rounded-md h-fit max-w-64 hover:bg-gray-100 transition-all ease-linear overflow-hidden ${custom}`}
      >
         <div className="flex flex-col p-4">{children}</div>
      </div>
   );
};

export const CardHeader = (props) => {
   const { src, alt } = props;
   return (
      <div className="p-2 flex justify-center">
         <img
            src={src}
            alt={alt}
            className="h-36 object-cover object-center scale-110"
         />
      </div>
   );
};

export const CardBody = (props) => {
   const { title, price } = props;
   return (
      <div>
         <h1 className="text-slate-700 font-semibold text-lg">{title}</h1>
         <span className="text-sm">Rp{price}/Pcs</span>
      </div>
   );
};

export const CardFooter = (props) => {
   const { onClick, id } = props;
   return (
      <div className="flex gap-3 py-2 ">
         <button
            type="submit"
            className="bg-custom-tertiary text-white px-2 box-border rounded-sm"
            onClick={() => {
               onClick.buy(id);
            }}
         >
            Beli
         </button>
         <button
            type="submit"
            className="bg-yellow-500 text-white px-2 box-border rounded-sm"
            onClick={() => {
               onClick.cart(id);
            }}
         >
            {" "}
            Tambah ke kereta
         </button>
      </div>
   );
};
