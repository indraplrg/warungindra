import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
   const { type, placeholder, custom } = props;
   return (
      <input
         type={type}
         placeholder={placeholder}
         className={`outline-none p-1 ${custom}`}
         ref={ref}
      />
   );
});

export default Input;
