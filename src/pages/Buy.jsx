import { useParams } from "react-router-dom";

const Buy = () => {
   const { id } = useParams();
   return <div>{id}</div>;
};

export default Buy;
