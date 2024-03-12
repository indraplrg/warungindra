const Button = (props) => {
   const { children, onClick } = props;
   return (
      <button
         className="bg-custom-tertiary text-white mt-2 py-1"
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
